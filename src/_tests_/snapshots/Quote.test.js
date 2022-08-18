import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../../components/Quote';

describe('Quote', () => {
  test('renders Quote component correctly', () => {
    render(<Quote />);
  });
});
