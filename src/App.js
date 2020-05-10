import React from 'react';
// Component Import
import Home from './components/home';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';

// Style imports
import './App.css';





function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
