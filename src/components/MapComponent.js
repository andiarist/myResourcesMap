import React, { useState } from 'react';

import { compose, withProps, withHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import './components.css';
const {
  MarkerClusterer,
} = require('react-google-maps/lib/components/addons/MarkerClusterer');

const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

const { REACT_APP_GOOGLE_API_KEY: apiKey } = process.env;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

const MapComponent = props => {
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  
  const handleActiveMarker = id => {
    console.log('markerId', id);
    if (id === activeMarkerId) {
      return;
    }
    setActiveMarkerId(id);
  };

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 38.743621376100144, lng: -9.195222648548942 }}>
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={20}>
        {console.log(props)}
        {props.isMarkerShown &&
          props.marks &&
          props.marks.map(({ id, y, x, batteryLevel }) => (
            <Marker
              position={{ lat: y, lng: x }}
              key={id}
              onMouseOver={() => handleActiveMarker(id)}
              onMouseOut={() => setActiveMarkerId(null)}>
              {activeMarkerId === id ? (
                <InfoBox
                  options={{
                    closeBoxURL: ``,
                    pixelOffset: new window.google.maps.Size(-15, -90),
                    enableEventPropagation: true,
                  }}>
                  <p
                    className={`infoBatteryBox ${
                      batteryLevel < 25 ? 'boxColorRed' : 'boxColorGreen'
                    }`}>
                    BL:{batteryLevel}%
                  </p>
                </InfoBox>
              ) : null}
            </Marker>
          ))}
      </MarkerClusterer>
    </GoogleMap>
  );
};

export default compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
    },
  }),
  withScriptjs,
  withGoogleMap,
)(MapComponent);
