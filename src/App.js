import React, { useState, useEffect } from 'react';
import { getResources } from './api/resources';

import MapComponent from './components/MapComponent';
import TableFilter from './components/TableFilter';

function App() {
  const [resources, setResources] = useState('');

  useEffect(() => {
    getResources().then(setResources);
  }, []);
  console.log('markers: ', resources);

  return (
    <div className="App">
      <MapComponent isMarkerShown marks={resources} />
      <TableFilter marks={resources} />
    </div>
  );
}

export default App;
