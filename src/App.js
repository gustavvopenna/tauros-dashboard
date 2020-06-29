import React from 'react';
import 'normalize.css';

import './App.css';
import './static/fonts/style.css'

import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Dashboard />
    </div>
  );
}

export default App;
