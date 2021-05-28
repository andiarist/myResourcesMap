import React, { useState, useEffect } from 'react';
import { getResources } from './api/resources';

import MapComponent from './components/MapComponent';

function App() {
  const [resources, setResources] = useState(null);

  useEffect(() => {
    getResources().then(setResources);
  }, []);
  console.log('markers: ', resources);

  return (
    <div className="App">
      <MapComponent isMarkerShown marks={resources} />
    </div>
  );
}

export default App;
