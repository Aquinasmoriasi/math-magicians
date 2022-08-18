import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  test('renders Calculator component', () => {
    render(<Calculator />);
  });
});
