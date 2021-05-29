import React, { useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerClusterer,
} from '@react-google-maps/api';

function MapComponent2({ marks }) {
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  console.log('marks', marks);

  const handleActiveMarker = id => {
    console.log('markerId', id);
    if (id === activeMarkerId) {
      return;
    }
    setActiveMarkerId(id);
  };

  const handleOnLoad = map => {
    const centerMap = [
      { position: { lat: 38.711046, lng: -9.160096 } },
      { position: { lat: 38.739429, lng: -9.137115 } },
    ];
    const bounds = new window.google.maps.LatLngBounds();
    centerMap.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const onMarkerClustererClick = markerClusterer => {
    const clickedMarkers = markerClusterer.getMarkers();
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      zoom={12}
      onClick={() => setActiveMarkerId(null)}
      mapContainerStyle={{ width: '100vw', height: '100vh' }}>
      <MarkerClusterer
        onClick={() => onMarkerClustererClick()}
        averageCenter
        enableRetinaIcons
        gridSize={20}>
        {marks.map(({ id, name, x, y, batteryLevel }) => (
          <Marker
            key={id}
            position={{ lat: y, lng: x }}
            onMouseOver={() => handleActiveMarker(id)}
            onMouseOut={() => setActiveMarkerId(null)}>
            {activeMarkerId === id ? (
              <InfoWindow>
                <div>{batteryLevel}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
}

export default MapComponent2;
