import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar'; // Adjust the path as necessary
import Footer from './components/Footer';   // Adjust the path as necessary


function App() {
  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
