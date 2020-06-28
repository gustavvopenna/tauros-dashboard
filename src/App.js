import React, { useEffect } from 'react';
import './App.css';

import { useFetch } from './api/tauros'
import Dashboard from './components/dashboard/Dashboard';

function App() {

  const { response } = useFetch('/api/v1/data/listbalances/', 'GET')
  console.log(response)

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Dashboard />
    </div>
  );
}

export default App;
