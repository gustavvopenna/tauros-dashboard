import React from 'react';
import 'normalize.css';

import './App.css';
import './static/fonts/style.css'

import Navbar from './components/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
