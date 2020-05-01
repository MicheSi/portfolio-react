import React from 'react';
import {Route} from 'react-router-dom';
// Component Import
import Home from './components/home';
import About from './components/about';
// Style imports
import './App.css';


function App() {
  return (
    <div className="App">
      <Home/>
      <About />
    </div>
  );
}

export default App;
