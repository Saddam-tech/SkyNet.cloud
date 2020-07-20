import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <img style={{position: 'relative', width: '1800px', height: '900px'}} src="./assets/background.png" alt="new" />
      <Layout />
    </div>
  );
}

export default App;
