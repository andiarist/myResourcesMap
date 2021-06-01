import React, { useState, useEffect } from 'react';
import { getResources } from './api/resources';

import MapComponent from './components/MapComponent';
import TableFilter from './components/TableFilter';
import NavPannel from './components/NavPannel';

import './App.css';

function App() {
  const [resources, setResources] = useState('');
  const [resourcesFiltered, setResourcesFiltered] = useState('');
  const [filters, setFilters] = useState([]);

  let params =
    '/api/v1/routers/lisboa/resources?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473';

  useEffect(() => {
    getResources(params).then(result => {
      setResources(result);
      setResourcesFiltered(result);
    });
  }, []);

  function handleSubmit(formFilters) {
    console.log('filtros en App:', formFilters);
    setFilters(formFilters);
  }

  useEffect(() => {
    let filteredByTypes = [];
    if (resources.length !== 0 && filters.length !== 0) {
      resources.forEach(element => {
        filters.forEach(item => {
          if (element.resourceType === item) filteredByTypes.push(element);
        });
      });
      setResourcesFiltered(filteredByTypes);
    } else {
      setResourcesFiltered(resources);
    }
  }, [filters]);

  console.log('resourcesFiltered en App:', resourcesFiltered);

  return (
    <div className="App layout-wrapper">
      <header className="layout-header">
        <h1>My Resources Map</h1>
      </header>
      <main className="layout-main">
        <section className="layout-section">
          <aside className="aside-3">
            <NavPannel marks={resources} onSubmit={handleSubmit} />
          </aside>
          <article className="article-9">
            <MapComponent isMarkerShown marks={resourcesFiltered} />
          </article>
        </section>

        <section className="layout-section">
          <TableFilter marks={resources} />
        </section>
      </main>
    </div>
  );
}

export default App;
