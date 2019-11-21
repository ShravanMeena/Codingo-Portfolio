import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Portfolio from './components/Portfolio'
import Header from './components/Header';
import Welcome from './components/Welcome'
import Services from './components/Services'
import About from './components/About'
import CallToAction from './components/CallToAction'


function App() {
  return (
    <div className="App">
      <Navigation logoTitle="Codingo Portfolio"/>
      <Header title="Codingo Portfolio" button="Fint Out More" />
      <About title="Stylish Portfolio is the perfect theme for your next project!" button="What We Offer"/>
      <Services />
      <Welcome title="Welcome to your next website!" button="Download"/>
      <Portfolio title='Codingo Project' description="Stylish Portfolio is the perfect theme for your next project!"/>
      <CallToAction title="The buttons below are impossible to resist..." button1="Click Me!" button2="Look At Me!"/>
    </div>
  );
}

export default App;
