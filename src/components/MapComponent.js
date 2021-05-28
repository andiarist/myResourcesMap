import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
const {
  MarkerClusterer,
} = require('react-google-maps/lib/components/addons/MarkerClusterer');

const { REACT_APP_GOOGLE_API_KEY: apiKey } = process.env;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

const MapComponent = compose(
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
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 38.743621376100144, lng: -9.195222648548942 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={20}>
      {props.isMarkerShown &&
        props.marks &&
        props.marks.map(mark => (
          <Marker position={{ lat: mark.y, lng: mark.x }} />
        ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default MapComponent;
