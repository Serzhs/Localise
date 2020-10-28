import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './button';

it('Button matches snapshot', () => {
  const tree = renderer.create(<Button label="Button Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
