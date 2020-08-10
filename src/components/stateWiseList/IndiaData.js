import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import testCenter from '../../data/testCenters';
import Dropdown from '../stateListDropdown';
import ImportFile from '../uploadFile';
import Button from '@material-ui/core/Button';

const cx = classNames.bind(require('./stateWiseList.module.css'));

export default function IndiaData(props) {
  const {
    onStateSelect,
    handleStateReset,
    onTowerToggle,
    viewTestCenters,
    handleHeatmapData,
  } = props;
  const [heatmapData, setHeatmapData] = React.useState([]);
  const [heatmap, setHeatmap] = React.useState(false);
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
      <div>
        <Button
          variant="contained"
          onClick={() => onTowerToggle(!viewTestCenters)}
        >
          {viewTestCenters ? 'Show Heatmap' : 'Show Towers'}
        </Button>
      </div>
      <section className={cx('list-wrapper')}>
        <section className={cx('list-content')}>
          <Dropdown
            handleStateClick={handleTestClick}
            handleStateReset={stateReset}
            // heatmapData={heatmapData}
          />
          <ImportFile
            setHeatmapData={handleHeatmapData}
            // setHeatmap={setHeatmap}
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
