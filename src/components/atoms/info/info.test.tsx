import React from 'react';
import renderer from 'react-test-renderer';

import { Info } from './info';

it('Info matches snapshot', () => {
  const tree = renderer.create(<Info label="Info Label" value="Info Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
