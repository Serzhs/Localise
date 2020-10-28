import React from 'react';
import renderer from 'react-test-renderer';

import { Tag } from './tag';

it('Tag matches snapshot', () => {
  const tree = renderer.create(<Tag label="tag label" />).toJSON();
  expect(tree).toMatchSnapshot();
});
