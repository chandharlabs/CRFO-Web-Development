import React, { Component } from 'react';
import Towers from './components/TowersFunctional';
import IndiaData from './components/stateWiseList/IndiaData';
import { withAuth0 } from '@auth0/auth0-react';
import classNames from 'classnames/bind';
import AppHeader from './components/appHeader/AppHeader';
import AppTable from './components/stateWiseList/locationwiseChart.js';
import LandingPage from './components/landingPage';
const cx = classNames.bind(require('./App.module.css'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indiaData: [],
      districtData: {},
      selectedLocationData: {
        state: {},
        sensor: {},
      },
      selectedLocCoordinate: [],
      selectedLocationDataDisplay: false,
      newsSearchKeyword: 'India',
      showTestCenters: true,
      showTowers: true,
      showLeftNav: true,
      selectedLocationId: null,
      showLTE: true,
      heatData: { lat: [], lon: [], val: [] },
    };
  }

  handleStateWiseDataSuccess = (indiaData) => {
    this.setState({
      indiaData: indiaData,
    });
  };

  handleStateSelect = (stateData) => {
    let locationNoStr = stateData.LocationCode.replace('L', '');
    const sensorData = this.state.indiaData.find(
      (sensor) => sensor.LocationCode === stateData.LocationCode
    );
    this.setState({
      selectedLocationData: {
        state: stateData,
        sensor: sensorData,
      },
      selectedLocCoordinate: [stateData.longitude, stateData.latitude],
      selectedLocationId: Number(locationNoStr) - 1,
    });
    console.log(this.state);
  };

  handleStateReset = () => {
    this.setState({
      selectedLocationData: { state: [], sensor: [] },
      selectedLocCoordinate: [],
      selectedLocationId: null,
    });
  };

  handleClose = (_) => {
    this.setState({
      selectedLocationDataDisplay: false,
    });
  };

  handleTestCenterToggle = (showTestCenters) => {
    this.setState({
      showTestCenters: !!showTestCenters,
    });
  };

  handleTowersToggle = (showTowers) => {
    this.setState({
      showTowers: !!showTowers,
    });
  };

  handleTowerTypeToggle = (towerType) => {
    if (this.state.heatData.val.length) {
      this.setState({
        showTestCenters: !!towerType,
        showTowers: !!towerType,
      });
    } else alert('upload proper csv file');
  };

  toggleLeftNav = () => {
    this.setState({
      showLeftNav: !this.state.showLeftNav,
    });
  };
  toggleLTE = () => {
    this.setState({
      showLTE: !this.state.showLTE,
    });
  };
  handleHeatmapData = (data) => {
    this.setState({ heatData: data });
    console.log(this.state.heatData);
  };

  render() {
    let {
      indiaData,
      showTestCenters,
      showTowers,
      selectedLocationData,
      selectedLocationId,
      showLTE,
      heatData
    } = this.state;
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;

    return (
      <>
        <section className={cx('app-wrapper')}>
          {!isAuthenticated && (
            <LandingPage loginWithRedirect={loginWithRedirect} />
          )}
          {isAuthenticated && (
            <section className={cx('app-container')}>
              <div className={cx('map-wrapper')}>
                <Towers
                  onStateWiseDataGetSuccess={this.handleStateWiseDataSuccess}
                  onDistrictWiseDataGetSuccess={
                    this.handleDistrictWiseDataSuccess
                  }
                  viewTestCenters={showTestCenters}
                  viewTowers={showTowers}
                  selectedLocation={selectedLocationData}
				  heatData={heatData}
                />
              </div>

              <div
                className={`${cx('left-panel')} ${
                  this.state.showLeftNav ? 'show' : cx('hide')
                }`}
              >
                <AppHeader logout={logout} />
                <div className={cx('tracker-list-container')}>
                  <div className={cx('list-wrapper')}>
                    <IndiaData
                      indiaData={indiaData}
                      onStateSelect={this.handleStateSelect}
                      onTowerToggle={this.handleTowerTypeToggle}
                      viewTestCenters={showTestCenters}
                      viewLTE={showLTE}
                      handleStateReset={this.handleStateReset}
                      handleHeatmapData={this.handleHeatmapData}
                    />
                  </div>

                  <>
                    {selectedLocationId !== null && (
                      <div className={cx('new-wrapper')}>
                        <AppTable selectedLocation={selectedLocationData} />
                      </div>
                    )}
                    <span
                      className={cx('toggle-button')}
                      onClick={this.toggleLeftNav}
                    >
                      {this.state.showLeftNav ? 'Hide' : 'Show'}
                    </span>
                  </>
                </div>
              </div>
            </section>
          )}
        </section>
      </>
    );
  }
}

export default withAuth0(App);
