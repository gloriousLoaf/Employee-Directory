// App
import React from 'react';
import Header from './components/Header/index.js';
import Instructions from './components/Instructions/index.js';
import Footer from './components/Footer/index.js';
import Directory from './components/Directory/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Header />
      <Instructions />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;
