import React from 'react';
import generator from '../functions/generator';

const random = Math.floor(Math.random() * generator.length);

const Quote = () => (
  <div className="quote">
    <p>
      <span>{generator[random].quote}</span>
      <span>{generator[random].by}</span>
    </p>
  </div>
);

export default Quote;
