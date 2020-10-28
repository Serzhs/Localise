import React from 'react';
import renderer from 'react-test-renderer';

import { Dashboard } from './dashboard';

it('Dashboard matches snapshot', () => {
  const tree = renderer.create(<Dashboard />).toJSON();
  expect(tree).toMatchSnapshot();
});
