import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import Button from '@material-ui/core/Button';

const buttonRef = React.createRef();

export default class ImportFile extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data) => {
    console.log('---------------------------');
    console.log(data);
    this.setState({ data: data });
    console.log('---------------------------');
    data.shift();
    data.pop();
    let lat = [];
    let lon = [];
    let rsrp = [];
    data.map((val) => {
      console.log(val.data);
      lat.push(val.data[0]);
      lon.push(val.data[1]);
      rsrp.push(val.data[2]);
    });
    console.log('data:', lat, lon, rsrp);

    // console.log(data.data);
    // data = data.map((col, i) => data.map((row) => row[i]));
    // console.log(data);
    // this.props.setHeatmapData();
    // this.props.setHeatmap(true);
    console.log(this.state.data);
    this.props.setHeatmapData({ lat: lat, lon: lon, val: rsrp });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <>
        <h5>Upload .csv file to see heatmap</h5>
        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          config={{ header: false, dynamicTyping: true, worker: true }}
          onRemoveFile={this.handleOnRemoveFile}
          accept=".csv"
        >
          {({ file }) => (
            <aside
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginBottom: 10,
              }}
            >
              <Button
                type="button"
                size="small"
                onClick={this.handleOpenDialog}
              >
                Browse file
              </Button>{' '}
              <span
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ccc',
                  height: 50,

                  margin: 15,
                  // paddingLeft: 13,
                  // paddingTop: 3,
                  padding: 10,
                  width: 'auto',
                  minWidth: 150,
                }}
              >
                {file && file.name}
              </span>
            </aside>
          )}
        </CSVReader>
      </>
    );
  }
}
