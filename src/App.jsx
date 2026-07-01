import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Booking from './components/Booking';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="site-background">
        <Header />
        <Hero />
        <Rooms />
        <Services />
        <Booking />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
