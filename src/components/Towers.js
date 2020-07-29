import React from 'react';
import Plot from 'react-plotly.js';
import { readRemoteFile } from 'react-papaparse';
import testCenters from '../data/testCenters';

class Towers extends React.Component {
  constructor(props) {
    super(props)

    // Convert testCenter object to table
    let centerTable = {
      state: [],
      city: [],
      latitude: [],
      longitude: [],
      LocationCode: [],
      text: [],
    }

    testCenters.forEach(center => {
      centerTable.state.push(center.state)
      centerTable.city.push(center.city)
      centerTable.latitude.push(center.longitude) // Whoever populated the json flipped these
      centerTable.longitude.push(center.latitude)
      centerTable.LocationCode.push(center.LocationCode)
    });

    // Set default state
    this.state = {
      data: {
        gsm: [],
        umts: [],
        lte: [],
      },
      revision: 0,
      center: [28.651952, 75.731495],
      initialised: false,
      centers: centerTable,
      sensorData: {}
    }
  }

  componentDidMount() {
    console.log('Reading sensor data');
    fetch('/sensorData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        this.setState({ sensorData: { json } });
        this.props.onStateWiseDataGetSuccess(json);
        // Set the text field for the states
        let textField = json.map((sensor) => `DVB: ${sensor["470 - 790 MHz (DVB)"]["PVS"] * 100}%<br>LTE: ${sensor["830 - 890 MHz (LTE)"]["PVS"] * 100}%<br>GSM900: ${sensor["890 - 960 MHz (GSM900)"]["PVS"] * 100}%`)
        this.setState({
          centers: {
            state: this.state.centers.state,
            city: this.state.centers.city,
            latitude: this.state.centers.latitude,
            longitude: this.state.centers.longitude,
            LocationCode: this.state.centers.LocationCode,
            text: textField,
          }
        })
      })
      .catch((err) =>
        console.error('Encountered error when accessing sensor data', err)
      );


    console.log("Reading tower data")
    readRemoteFile('http:/localhost:3000/towers_in_range.csv', {
      header: false,
      dynamicTyping: true,
      worker: true,
      complete: (results, file) => {
        if (!results || results.errors.length !== 0) {
          console.log("Found errors", results)
          return undefined
        }

        // Add results to respective arrays
        let lte = results.data.filter(record => record[0] == "LTE")
        let gsm = results.data.filter(record => record[0] == "GSM")
        let umts = results.data.filter(record => record[0] == "UMTS")
        // Transponse arrays for easy lookup
        lte = lte[0].map((col, i) => lte.map(row => row[i]))
        gsm = gsm[0].map((col, i) => gsm.map(row => row[i]))
        umts = umts[0].map((col, i) => umts.map(row => row[i]))
        // Append formatted text fields
        //lte.push(lte[0].map( (v, i) => `${lte[1]}<br>${lte[2]}<br>${lte[3]}`))
        lte.push(lte[0].map((v, i) => `MCC: ${lte[1][i]}<br>NET: ${lte[2][i]}<br>CELL ID: ${lte[3][i]}`))
        gsm.push(gsm[0].map((v, i) => `MCC: ${gsm[1][i]}<br>NET: ${gsm[2][i]}<br>CELL ID: ${gsm[3][i]}`))
        umts.push(umts[0].map((v, i) => `MCC: ${umts[1][i]}<br>NET: ${umts[2][i]}<br>CELL ID: ${umts[3][i]}`))

        // COLUMNS are now: RADIO,MCC,NET,CELL_ID,LONGITUDE,LATITUDE,LOCATION_CODE,TEXT

        this.setState({
          data: {
            lte: lte,
            gsm: gsm,
            umts: umts,
          }
        })
        console.log("Parsing complete:", this.state.data, results, file)
      },
      error: (error, file) => {
        console.log("Error occuered when reading file", file, error)
      },
      fastMode: true,
    })
  }

  render() {
    console.log("Sensor data", this.props.viewTowers)
    let centers = this.state.centers
    let center = this.state.center
    let data = [
      {
        lon: 0,
        lat: 0,
        type: 'scattermapbox',
      }
    ]

    if (this.props.viewTowers) {
      data.push({
        lon: this.state.data.lte[4],
        lat: this.state.data.lte[5],
        type: 'scattermapbox',
        marker: { color: 'purple' },
        name: 'LTE',
        text: this.state.data.lte[7]
      },
      {
        lon: this.state.data.gsm[4],
        lat: this.state.data.gsm[5],
        type: 'scattermapbox',
        marker: { color: 'green' },
        name: 'GSM',
        text: this.state.data.gsm[7]
      },
      {
        lon: this.state.data.umts[4],
        lat: this.state.data.umts[5],
        type: 'scattermapbox',
        marker: { color: 'orange' },
        name: 'UMTS',
        text: this.state.data.umts[7]
      })
    }

    if (this.props.viewTestCenters) {
      data.push({
        lon: centers.longitude,
        lat: centers.latitude,
        type: 'scattermapbox',
        marker: { color: 'red', size: 14 },
        name: 'Test Center',
        text: centers.text,
      })
    }

    // props and states should be updated in their own lifecycle methods
    // this is hacky, but allows for quick prototyping.
    if (this.props.selectedLocation.state.LocationCode) {
      center = [
        this.props.selectedLocation.state.longitude,
        this.props.selectedLocation.state.latitude - 1.5,
      ];
      if (this.props.viewTestCenters) {
        data.push({
          lon: [this.props.selectedLocation.state.latitude], // These flipped values are used throughout the application
          lat: [this.props.selectedLocation.state.longitude],
          type: 'scattermapbox',
          marker: { color: 'blue', size: 14 },
          name: 'Selected Test Center',
          text: [centers.text[centers.LocationCode.findIndex((code) => code == this.props.selectedLocation.state.LocationCode)]]
        })
      }
    }

    console.log("Data", data)

    return (
      <Plot
        data={data}
        layout={{
          autosize: true,
          dragmode: 'zoom',
          mapbox: {
            style: 'open-street-map',
            center: { lat: center[0], lon: center[1] + 1.5 },
            zoom: 10
          },
          margin: {
            l: 0, r: 0, t: 0, b: 0
          }
        }}
        displayModeBar={false}
        revision={data.revision}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default Towers;