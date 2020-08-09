import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import testCenter from '../../data/testCenters';
import Dropdown from '../stateListDropdown';
import {parse} from 'papaparse'

const cx = classNames.bind(require('./stateWiseList.module.css'));

export default function IndiaData(props) {
  const { onStateSelect, handleStateReset, onTowerToggle, viewTestCenters, heatdata, handleHeatdata } = props;

  const handleTestClick = (center) => {
    const selectedState = testCenter.find((location) => {
      return location.city === center;
    });
    onStateSelect(selectedState);
  };

  const stateReset = () => {
    handleStateReset();
  };

  const onFileSelect = (event) => {
    console.log("Paring data")
    const file = event.target.files[0]
    // Parse file
    parse(file, {
      header: false,
      dynamicTyping: true,
      worker: true,
      complete: (results, file) => {
        if (!results || results.errors.length !== 0) {
          console.log('Found errors', results);
          return undefined;
        }
        let data = results.data
        data = data[0].map((col, i) => data.map((row) => row[i]));
        handleHeatdata({
          'lon': data[0].slice(1), 'lat': data[1].slice(1), 'val': data[2].slice(1)
        })
        console.log("Heatmap parsed", data)
      },
      error: (error, file) => {
        console.log('Error occuered when reading file', file, error);
      },
      fastMode: true,
    })
  }

  return (
    <>
      <div>
        <button onClick={() => onTowerToggle(!viewTestCenters)}>
        {
          viewTestCenters ? "Show Heatmap" : "Show Towers"
        }
        </button>
        <input type="file" id="heatdat" onChange={onFileSelect}></input>
      </div>
      <section className={cx('list-wrapper')}>
        <section className={cx('list-content')}>
          <Dropdown
            handleStateClick={handleTestClick}
            handleStateReset={stateReset}
          />
        </section>
      </section>
    </>
  );
}

IndiaData.propTypes = {
  onStateSelect: PropTypes.func.isRequired,
  handleStateReset: PropTypes.func.isRequired,
};
