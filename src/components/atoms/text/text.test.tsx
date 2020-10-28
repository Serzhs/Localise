import React from 'react';
import renderer from 'react-test-renderer';

import { H1, H3 } from './text';

it('H1 matches snapshot', () => {
  const tree = renderer.create(<H1 text="heading1" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('H3 matches snapshot', () => {
  const tree = renderer.create(<H3 text="heading3" />).toJSON();
  expect(tree).toMatchSnapshot();
});
