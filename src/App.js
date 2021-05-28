import React, { useState, useEffect } from 'react';
import { getResources } from './api/resources';

function App() {
  const [resources, setResources] = useState(null);

  useEffect(() => {
    getResources().then(setResources);
  }, []);
  console.log('resources: ', resources);

  return (
    <div className="App">
      {resources && (
        <ul>
          {resources.map(resource => (
            <li key={resource.id}>{JSON.stringify(resource)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
