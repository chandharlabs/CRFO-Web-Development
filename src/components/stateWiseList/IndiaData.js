import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import testCenter from '../../data/testCenters';
import Dropdown from '../stateListDropdown';

const cx = classNames.bind(require('./stateWiseList.module.css'));

export default function IndiaData(props) {
  const { onStateSelect, handleStateReset } = props;

  const handleTestClick = (center) => {
    const selectedState = testCenter.find((location) => {
      return location.city === center;
    });
    onStateSelect(selectedState);
  };
  const stateReset = () => {
    handleStateReset();
  };
  return (
    <>
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
