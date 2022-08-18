import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../components/Home';

describe('Home', () => {
  test('renders Home component correctly', () => {
    render(<Home />);
  });
});
