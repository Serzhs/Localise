import React from 'react';
import renderer from 'react-test-renderer';

import { Progress } from './progress';

it('Progress matches snapshot', () => {
  const tree = renderer.create(<Progress progressPercentage={45} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Calculates low correctly', () => {
  const tree = renderer.create(<Progress progressPercentage={10} />).toJSON();
  // @ts-ignore
  expect(tree?.children[0].props.className).toContain('low');
});

it('Calculates medium correctly', () => {
  const tree = renderer.create(<Progress progressPercentage={40} />).toJSON();
  // @ts-ignore
  expect(tree?.children[0].props.className).toContain('medium');
});

it('Calculates high correctly', () => {
  const tree = renderer.create(<Progress progressPercentage={99} />).toJSON();
  // @ts-ignore
  expect(tree?.children[0].props.className).toContain('high');
});
