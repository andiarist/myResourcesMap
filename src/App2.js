import React, { useState, useEffect } from 'react';
import { getResources } from './api/resources';
import { useLoadScript } from '@react-google-maps/api';

import MapComponent2 from './components/MapComponent2';

const { REACT_APP_GOOGLE_API_KEY: apiKey } = process.env;

export default function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources().then(setResources);
  }, []);
  console.log('markers: ', resources);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey, // Add your API key
  });

  return isLoaded ? <MapComponent2 marks={resources} /> : null;
}
