import React from 'react';
import classNames from 'classnames/bind';
import StateCenterMenu from '../statelist';
import testCenter from '../../data/testCenters';

const cx = classNames.bind(require('./stateWiseList.module.css'));

export default function IndiaData(props) {
  const { onStateSelect, viewTestCenters, viewTowers } = props;
  
  const handleTestCentersToggle = () => {
    props.onTestCenterToggle(!viewTestCenters);
  };
  const handleTowersToggle = () => {
    props.onTowersToggle(!viewTowers);
  }

  const handleTestClick = (center) => {
    const selectedState = testCenter.find((location) => {
      return location.city === center;
    });
    onStateSelect(selectedState);
  };
  return (
    <>
      <section className={cx('list-wrapper')}>
        <section className={cx('list-content')}>
          <div className="switch-text">
            Show measurement locations
            <label className="switch">
              <input
                type="checkbox"
                checked={viewTestCenters}
                onChange={() => handleTestCentersToggle()}
              />
              <span className="slider round" />
            </label>
          </div>
          <div className="switch-text">
            Show tower locations
            <label className="switch">
              <input
                type="checkbox"
                checked={viewTowers}
                onChange={() => handleTowersToggle()}
              />
              <span className="slider round" />
            </label>
          </div>
          <StateCenterMenu handleStateClick={handleTestClick} />
        </section>
      </section>
    </>
  );
}
