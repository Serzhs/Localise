import React, { FC } from 'react';
import Flag from 'react-world-flags';
import { H3 } from '../../atoms/text/text';

import styles from './languageCard.module.scss';
import { Progress } from '../../atoms/progress/progress';
import { Info } from '../../atoms/info/info';

export type Props = {
  id: number;
  progressPercentage: number;
  words: number;
  unverified: number;
  countryCode: string;
  countryName: string;
};

export const LanguageCard: FC<Props> = ({ id, countryName, countryCode, unverified, progressPercentage, words }) => {
  return (
    <div data-test-id="language-card">
      <div className={styles.header}>
        <Flag code={countryCode} height="10" />
        <div className={styles.headingWrapper}>
          <H3 text={countryName} />
        </div>
      </div>
      <div className="margin-bottom--2">
        <Progress progressPercentage={progressPercentage} />
      </div>
      <div className="row">
        <div className="col-xs-12 flex between-xs">
          <div className={styles.infoWrapper}>
            <Info label="DONE" value={`${progressPercentage}%`} />
          </div>
          <div className={styles.infoWrapper}>
            <Info label="WORDS TO DO" value={words} highlighted={true} />
          </div>
          <div className={styles.infoWrapper}>
            <Info label="UNVERIFIED" value={unverified} highlighted={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
