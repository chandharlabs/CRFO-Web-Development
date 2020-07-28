import React, { Component } from 'react';
import Map from './components/Map.js';
import IndiaData from './components/stateWiseList/IndiaData';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withAuth0 } from '@auth0/auth0-react';

import classNames from 'classnames/bind';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import AppTable from './components/stateWiseList/locationwiseChart.js';
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
      dimensions: {
        height: window.innerHeight,
        width: window.innerWidth,
      },
      showLeftNav: true,
      selectedLocationId: null,
      showLTE: true,
    };
  }

  mobileWindowSizeBreakPoint = 767;

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
      selectedLocationDataDisplay:
        this.state.dimensions.width <= this.mobileWindowSizeBreakPoint,
    });
    console.log(this.state);
  };

  handleResize = (_) => {
    let dimension = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    this.setState({
      dimensions: {
        ...dimension,
      },
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

  toggleLeftNav = (value) => {
    this.setState({
      showLeftNav: !this.state.showLeftNav,
    });
  };
  toggleLTE = (_) => {
    this.setState({
      showLTE: !this.state.showLTE,
    });
  };
  componentDidMount = (_) => {
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  render() {
    let {
      indiaData,
      showTestCenters,
      dimensions,
      selectedLocationData,
      // newsSearchKeyword,
      selectedLocationDataDisplay,
      // selectedLocCoordinate,
      selectedLocationId,
      showLTE,
    } = this.state;
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;

    return (
      <>
        <section className={cx('app-wrapper')}>
          {!isAuthenticated && (
            <div>
              Please <button onClick={loginWithRedirect}>Log In</button> to use
              this app...
            </div>
          )}
          {isAuthenticated && (
            <section className={cx('app-container')}>
              <div className={cx('map-wrapper')}>
                <Map
                  // onStateWiseDataGetSuccess={this.handleStateWiseDataSuccess}
                  // onDistrictWiseDataGetSuccess={
                  // this.handleDistrictWiseDataSuccess
                  // }
                  viewTestCenters={showTestCenters}
                  selectedLocation={selectedLocationData}
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
                      onTestCenterToggle={this.handleTestCenterToggle}
                      viewTestCenters={showTestCenters}
                      viewLTE={showLTE}
                    />
                  </div>
                  {dimensions.width > this.mobileWindowSizeBreakPoint && (
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
                  )}
                  {dimensions.width <= this.mobileWindowSizeBreakPoint && (
                    <Dialog
                      onClose={this.handleClose}
                      open={selectedLocationDataDisplay}
                      fullWidth={true}
                      className={`${cx('customized-dialog-wrapper')}`}
                    >
                      <DialogTitle
                        id="customized-dialog-title"
                        onClose={this.handleClose}
                        className="customized-dialog-title"
                      ></DialogTitle>
                      {/* {selectedLocationData.loc} */}
                      <IconButton
                        aria-label="close"
                        onClick={this.handleClose}
                        style={{ float: 'right' }}
                        className={`${cx('close-button')}`}
                      >
                        X
                      </IconButton>
                      <div className={`${cx('new-wrapper')} ${cx('test')}`}>
                        {/* <SelectedLocationData
                        locationData={{
                          ...selectedLocationData,
                          loc: newsSearchKeyword,
                        }}
                      /> */}
                      </div>
                    </Dialog>
                  )}
                </div>
                <AppFooter></AppFooter>
              </div>
            </section>
          )}{' '}
        </section>
      </>
    );
  }
}

// export default withAuth0(App);
export default withAuth0(App);
