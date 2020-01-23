import React from 'react';
import './App.css';
import Navbar from './commons/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
