import React, { useState, useEffect } from 'react';
import { Circle, Map, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
// TODO: Remove papaparser from yarn dependency list
import testCenters from '../data/testCenters.js';
import classNames from 'classnames/bind';
//import iconRed from './icon'
import redMarker from '../red-marker.png'
import blueMarker from 'leaflet/dist/images/marker-icon.png'
import L from 'leaflet'
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

const iconRed = new L.Icon({
              iconUrl: redMarker,
              iconSize: [25, 41],
              iconAnchor: [13, 41],
            });

const iconBlue = new L.Icon({
  iconUrl: blueMarker,
  iconSize: [25, 41],
  iconAnchor: [13, 41],
});

export default function MapContainer(props) {
  const {
    onStateWiseDataGetSuccess,
    onDistrictWiseDataGetSuccess,
    viewTestCenters,
    selectedLocCoordinate,
  } = props;

  if (selectedLocCoordinate && selectedLocCoordinate.length) {
    console.log(selectedLocCoordinate[0]);
    console.log(
      selectedLocCoordinate[0].latitude +
        ' ' +
        selectedLocCoordinate[0].longitude
    );
    center = [
      selectedLocCoordinate[0].longitude,
      selectedLocCoordinate[0].latitude - 1.5,
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
        setSensorData(json);
      })
      .catch((err) =>
        console.error('Encountered error when accessing sensor data', err)
      );
  }, []);
  
  return (
    <div className={'map-container'}>
      <Map center={center} zoom={7} zoomControl={false}>
        <ZoomControl position="bottomright" />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {sensorData &&
          sensorData.map((sensor) => {
            const testCenter = testCenters.find( center => center.LocationCode == sensor.LocationCode );
            if (testCenter === undefined) return null;
            return (
              <Circle
                key={testCenter.LocationCode}
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
                      type="DVB"
                      count={
                        sensor['470 - 790 MHz (DVB)'].PVS * 100 + '%'
                      }
                    />
                    <PopupLineItem
                      legend="cases"
                      type="LTE"
                      count={
                        sensor['830 - 890 MHz (LTE)'].PVS * 100 + '%'
                      }
                    />
                    <PopupLineItem
                      legend="death"
                      type="GSM900"
                      count={
                        sensor['890 - 960 MHz (GSM900)'].PVS * 100 + '%'
                      }
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
            if(selectedLocCoordinate.length > 0) {
              if(testCenter.LocationCode == selectedLocCoordinate[0].LocationCode) {
                return (
                  <Marker
                    key={testCenter.city}
                    position={[testCenter.longitude, testCenter.latitude]}
                    icon={iconRed}
                  ></Marker>
                );
              }
            }
            return (

//                 <Marker
//                   key={testCenter.city}
//                   position={[testCenter.longitude, testCenter.latitude]}
//                   icon={iconBlue}
//                 ></Marker>

              <Marker
                key={testCenter.LocationCode}
                position={[testCenter.longitude, testCenter.latitude]}
              icon={iconBlue}
              ></Marker>

            );
          })
        }
      </Map>
    </div>
  );
}
