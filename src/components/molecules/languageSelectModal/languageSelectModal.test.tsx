import React from 'react';
import renderer from 'react-test-renderer';

import { LanguageSelectModal } from './languageSelectModal';

it('LanguageSelectModal matches snapshot', () => {
  const tree = renderer
    .create(
      <LanguageSelectModal
        onClose={() => {
          console.log('onClose');
        }}
        onLanguageChange={() => {
          console.log('onLanguageChange');
        }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
