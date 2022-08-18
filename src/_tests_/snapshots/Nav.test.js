import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import Nav from '../../components/Nav';

describe('Nav', () => {
  test('should match Nav snapshot', () => {
    const tree = render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
