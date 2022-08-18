import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Nav from './components/Nav';
// import Home from './components/Home';

const App = () => (
  <Router>
    <Nav />
  </Router>
);

export default App;
