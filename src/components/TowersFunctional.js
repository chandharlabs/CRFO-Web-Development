import React, { useState, useEffect, useMemo } from 'react';
import Plot from 'react-plotly.js';
import { readRemoteFile } from 'react-papaparse';
import testCenters from '../data/testCenters';

function Towers(props) {
  const centerTable = {
    state: [],
    city: [],
    latitude: [],
    longitude: [],
    LocationCode: [],
    text: [],
  };
  const [data, setData] = useState({ gsm: [], umts: [], lte: [] });
  const [center, setCenter] = useState([20.5937, 78.9629]);
  const [centers, setCenters] = useState(centerTable);
  const [zoom, setZoom] = useState(4);
  testCenters.forEach((center) => {
    centerTable.state.push(center.state);
    centerTable.city.push(center.city);
    centerTable.latitude.push(center.longitude); // Whoever populated the json flipped these
    centerTable.longitude.push(center.latitude);
    centerTable.LocationCode.push(center.LocationCode);
  });
  const centerData = useMemo(() => {
    console.log('Reading sensor data');
    fetch(`${window.location.href}sensorData.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        // this.setState({ sensorData: { json } });
        props.onStateWiseDataGetSuccess(json);
        // Set the text field for the states
        const textField = json.map(
          (sensor) =>
            `DVB: ${sensor['470 - 790 MHz (DVB)'].PVS * 100}%<br>LTE: ${
              sensor['830 - 890 MHz (LTE)'].PVS * 100
            }%<br>GSM900: ${sensor['890 - 960 MHz (GSM900)'].PVS * 100}%`
        );
        // const { centers } = this.state;
        // this.setState({
        //   centers: {
        //     state: centers.state,
        //     city: centers.city,
        //     latitude: centers.latitude,
        //     longitude: centers.longitude,
        //     LocationCode: centers.LocationCode,
        //     text: textField,
        //   },
        // });
        return textField;
      })
      .catch((err) =>
        console.error('Encountered error when accessing sensor data', err)
      );
  }, []);
  const towerData = useMemo(() => {
    console.log('Reading tower data');
    readRemoteFile(`${window.location.href}towers_in_range.csv`, {
      header: false,
      dynamicTyping: true,
      worker: true,
      complete: (results, file) => {
        if (!results || results.errors.length !== 0) {
          console.log('Found errors', results);
          return undefined;
        }

        // Add results to respective arrays
        let lte = results.data.filter((record) => record[0] === 'LTE');
        let gsm = results.data.filter((record) => record[0] === 'GSM');
        let umts = results.data.filter((record) => record[0] === 'UMTS');
        // Transponse arrays for easy lookup
        lte = lte[0].map((col, i) => lte.map((row) => row[i]));
        gsm = gsm[0].map((col, i) => gsm.map((row) => row[i]));
        umts = umts[0].map((col, i) => umts.map((row) => row[i]));
        // Append formatted text fields
        // lte.push(lte[0].map( (v, i) => `${lte[1]}<br>${lte[2]}<br>${lte[3]}`))
        lte.push(
          lte[0].map(
            (v, i) =>
              `MCC: ${lte[1][i]}<br>NET: ${lte[2][i]}<br>CELL ID: ${lte[3][i]}`
          )
        );
        gsm.push(
          gsm[0].map(
            (v, i) =>
              `MCC: ${gsm[1][i]}<br>NET: ${gsm[2][i]}<br>CELL ID: ${gsm[3][i]}`
          )
        );
        umts.push(
          umts[0].map(
            (v, i) =>
              `MCC: ${umts[1][i]}<br>NET: ${umts[2][i]}<br>CELL ID: ${umts[3][i]}`
          )
        );

        // COLUMNS are now: RADIO,MCC,NET,CELL_ID,LONGITUDE,LATITUDE,LOCATION_CODE,TEXT

        // this.setState({
        //   data: {
        //     lte,
        //     gsm,
        //     umts,
        //   },
        // });
        setData({ lte, gsm, umts });
        console.log('Parsing complete:', data, results, file);
      },
      error: (error, file) => {
        console.log('Error occuered when reading file', file, error);
      },
      fastMode: true,
    });
  }, []);
  useEffect(() => {
    setCenters({
      ...centers,
      centerData,
    });
  }, []);
  console.log('Sensor data', props.viewTowers);
  // const { centers } = this.state;
  // let { center } = this.state;
  const Mapdata = [
    {
      lon: 78.9629,
      lat: 20.5937,
      type: 'scattermapbox',
    },
  ];

  // let zoom = 4;
  const { viewTowers } = props;
  if (viewTowers) {
    Mapdata.push(
      {
        lon: data.lte[4],
        lat: data.lte[5],
        type: 'scattermapbox',
        marker: { color: 'purple' },
        name: 'LTE',
        text: data.lte[7],
      },
      {
        lon: data.gsm[4],
        lat: data.gsm[5],
        type: 'scattermapbox',
        marker: { color: 'green' },
        name: 'GSM',
        text: data.gsm[7],
      },
      {
        lon: data.umts[4],
        lat: data.umts[5],
        type: 'scattermapbox',
        marker: { color: 'orange' },
        name: 'UMTS',
        text: data.umts[7],
      }
    );
  }

  if (props.viewTestCenters) {
    Mapdata.push({
      lon: centers.longitude,
      lat: centers.latitude,
      type: 'scattermapbox',
      marker: { color: 'red', size: 14 },
      name: 'Test Center',
      text: centers.text,
    });
  }
  // if (this.props.selectedLocation.state.LocationCode) zoom = 10;
  const { selectedLocation } = props;
  console.log('selected location', selectedLocation);
  // props and states should be updated in their own lifecycle methods
  // this is hacky, but allows for quick prototyping.
  useEffect(() => {
    setCenter([
      selectedLocation.state.longitude,
      selectedLocation.state.latitude - 1.5,
    ]);
    setZoom(10);
    if (props.viewTestCenters) {
      Mapdata.push({
        lon: [selectedLocation.state.latitude], // These flipped values are used throughout the application
        lat: [selectedLocation.state.longitude],
        type: 'scattermapbox',
        marker: { color: 'blue', size: 14 },
        name: 'Selected Test Center',
        text: [
          centers.text[
            centers.LocationCode.findIndex(
              (code) => code === selectedLocation.state.LocationCode
            )
          ],
        ],
      });
    }
  }, [selectedLocation.state.LocationCode]);
  console.log('locationCode', selectedLocation.state.LocationCode);

  console.log('Data', data);
  console.log('Mapdata', Mapdata);

  return (
    <Plot
      data={Mapdata}
      layout={{
        autosize: true,
        dragmode: 'zoom',
        mapbox: {
          style: 'open-street-map',
          center: { lat: center[0], lon: center[1] + 1.5 },
          zoom,
        },
        margin: {
          l: 0,
          r: 0,
          t: 0,
          b: 0,
        },
        showlegend: true,
        legend: { x: 0.93, y: 0.98, bgcolor: 'white' },
      }}
      revision={data.revision}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
      config={{ displayModeBar: true }}
    />
  );
}

export default Towers;
