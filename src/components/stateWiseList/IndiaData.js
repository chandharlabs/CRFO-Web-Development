import React from 'react';
import classNames from 'classnames/bind';
import StateCenterMenu from '../statelist';
import testCenter from '../../data/testCenters';

const cx = classNames.bind(require('./stateWiseList.module.css'));

export default function IndiaData(props) {
  const { onStateSelect, viewTestCenters } = props;
  const handleTestCentersToggle = () => {
    props.onTestCenterToggle(!viewTestCenters);
  };
  const handleTestClick = (center) => {
    console.log('Index', center);
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
          <StateCenterMenu handleStateClick={handleTestClick} />
        </section>
      </section>
    </>
  );
}
