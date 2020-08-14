// App
import React from 'react';
import './App.css';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import Search from './components/Search/index.js';
import Directory from './components/Directory/index.js';

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <Header />
      <Search />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;
