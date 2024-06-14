/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import LargeFavicon from './assets/large-favicon.png'; // Adjust the path as necessary

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Resources from './pages/Resources';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';

function App() {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Add logic here to handle the search
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Menu />
        <SearchBar placeholder="Search..." onSearch={handleSearch} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/events" component={Events} />
          <Route path="/resources" component={Resources} />
          <Route path="/join-us" component={JoinUs} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

function App() {
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Add logic here to handle the search
  };

  return (
    <div className="App">
      <Sidebar />
      <Menu />
      <SearchBar placeholder="Search..." onSearch={handleSearch} />
      <header className="App-header">
        <img src={LargeFavicon} className="App-logo" alt="logo" />
        <p>
          Welcome to the Cybersecurity Club!
        </p>
        {/* Other components and content */}
      </header>
    <Footer />
    </div>
  );
}

export default App;
