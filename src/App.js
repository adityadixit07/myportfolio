import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <li className='main'>
        <Navbar/>
      </li>
      <Contact/>
    </div>
  );
}

export default App;
