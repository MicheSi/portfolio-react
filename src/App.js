import React from 'react';
// Component Import
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
// Style imports
import './App.css';




function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
