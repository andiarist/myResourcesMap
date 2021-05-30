import React, { useState, useEffect } from 'react';
import { getResources } from './api/resources';

import MapComponent from './components/MapComponent';
import TableFilter from './components/TableFilter';
import './App.css';

function App() {
  const [resources, setResources] = useState('');
  let params =
    '/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473';

  useEffect(() => {
    getResources(params).then(setResources);
  }, []);

  return (
    <div className="App layout-wrapper">
      <header className="layout-header">
        <h1>My Resources Map</h1>
      </header>
      <main className="layout-main">
        <section className="layout-section">
          <MapComponent isMarkerShown marks={resources} />
        </section>

        <section className="layout-section">
          <TableFilter marks={resources} />
        </section>
      </main>
    </div>
  );
}

export default App;
