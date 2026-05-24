/** @jsxImportSource @emotion/react */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import templateConfig from './templateConfig';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Team from './pages/Team';
import CTF from './pages/CTF';
import Resources from './pages/Resources';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import events from '../content/events.json';

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
        <header className="App-header">
          <img src={`${import.meta.env.BASE_URL}${templateConfig.site.logo}`} className="App-logo" alt={`${templateConfig.site.name} logo`} />
          <p>
            Welcome to the {templateConfig.site.name}!
          </p>
          {/* Other components and content */}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/events" render={() => <Events events={events} />} />
          <Route path="/team" component={Team} />
          <Route path="/ctf" component={CTF} />
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
