import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';
import Quote from './Quote';
import Calculator from './Calculator';
import generator from '../functions/generator';

const random = (quotes) => Math.floor(Math.random() * quotes.length);

const Nav = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/Quote" onClick={() => random(generator)}>Quote</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
    <footer>
      <p>&copy;App by Moriasi</p>
    </footer>
  </>
);

export default Nav;
