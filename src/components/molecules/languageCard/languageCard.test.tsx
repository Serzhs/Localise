import React from 'react';
import renderer from 'react-test-renderer';

import { LanguageCard } from './languageCard';

it('LanguageCard matches snapshot', () => {
  const tree = renderer
    .create(<LanguageCard countryCode="lv" countryName="Latvia" id={1} progressPercentage={30} unverified={999} words={67890} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
