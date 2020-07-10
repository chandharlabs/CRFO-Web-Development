import React, { useState, useEffect } from 'react';
import { Circle, Map, Marker, Popup, TileLayer } from 'react-leaflet';
// TODO: Remove papaparser from yarn dependency list
import testCenters from '../data/testCenters.js';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./map.module.css'));

let center = [9.5915668, 76.5221531];
const PopupLineItem = ({ type, count, legend }) => {
  return (
    <>
      <div className={cx(['popup-legend', 'legend-' + legend])}></div>
      <div className={cx('count-type')}>{type}</div>
      <div className={cx('counts')}>
        {count !== undefined && count !== null
          ? count.toLocaleString(navigator.language, {
              maximumFractionDigits: 2,
            })
          : ''}
      </div>
    </>
  );
};

export default function MapContainer(props) {
  const {
    onStateWiseDataGetSuccess,
    onDistrictWiseDataGetSuccess,
    viewTestCenters,
    selectedLocCoordinate,
  } = props;

  if (selectedLocCoordinate && selectedLocCoordinate.length) {
    center = [
      selectedLocCoordinate[0].latitude,
      selectedLocCoordinate[0].longitude,
    ];
  }

  const [sensorData, setSensorData] = useState(null);

  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    console.log('Fetching Data');

    fetch('/sensorData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json)
        setSensorData(json);
        // TODO: Group json data by state and pass to onStateWiseDataGetSuccess
        let sensorListByState = {};
        json.forEach((sensorReading) => {
          const testCenter = testCenters.find(
            (center) => center.LocationCode == sensorReading.LocationCode
          );
          const sensorCity = {
            city: testCenter.city,
            ...sensorReading,
          };

          if (!sensorListByState[testCenter.state])
            sensorListByState[testCenter.state] = [];
          sensorListByState[testCenter.state].push(sensorCity);
        });
        onStateWiseDataGetSuccess(sensorListByState);
      })
      .catch((err) => {
        console.error('Encountered error when accessing sensor data', err)
      });
  }, []);

  return (
    <div className={'map-container'}>
      <Map center={center} zoom={7}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {sensorData &&
          testCenters.map((testCenter) => {
            const locationData = sensorData[testCenter.LocationCode];
            if (locationData === undefined) return null;
            return (
              <Circle
                key={testCenter.city}
                center={[testCenter.longitude, testCenter.latitude]}
                fillColor="#d14f69"
                fillOpacity={0.6}
                stroke={false}
                radius={50000}
                onMouseOver={(e) => {
                  firstLoad && setFirstLoad(false);
                  e.target.openPopup();
                }}
              >
                <Popup>
                  <h3>{testCenter.city + ', ' + testCenter.state}</h3>
                  <div className={cx('popup-line-wrap')}>
                    <PopupLineItem
                      legend="cured"
                      type="Low"
                      count={locationData['470 - 790 MHz (DVB)'].PVS}
                    />
                    <PopupLineItem
                      legend="cases"
                      type="Mid"
                      count={locationData['830 - 890 MHz (LTE)'].PVS}
                    />
                    <PopupLineItem
                      legend="death"
                      type="High"
                      count={locationData['890 - 960 MHz (GSM900)'].PVS}
                    />
                  </div>
                  <a
                    href={
                      'https://www.google.com/maps/search/?api=1&query=' +
                      testCenter.longitude +
                      ',' +
                      testCenter.latitude
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </a>
                </Popup>
              </Circle>
            );
          })}
        {viewTestCenters &&
          testCenters.map((testCenter) => {
            return (
              <Marker
                key={testCenter.city}
                position={[testCenter.longitude, testCenter.latitude]}
              ></Marker>
            );
          })}
      </Map>
    </div>
  );
}
