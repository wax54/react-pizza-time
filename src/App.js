/** The Main App */

import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';

import NavBar from "./NavBar";
import CurrentDelivery from "./CurrentDelivery";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <CurrentDelivery />
      </BrowserRouter>
    </div>
  );
}


export default App;
