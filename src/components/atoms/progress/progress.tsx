import React, { FC } from 'react';
import styles from './progress.module.scss';

type Props = {
  progressPercentage: number;
};

export const Progress: FC<Props> = ({ progressPercentage }) => {
  let colorClass;

  if (progressPercentage < 30) {
    colorClass = styles.low;
  } else if (progressPercentage < 70) {
    colorClass = styles.medium;
  } else {
    colorClass = styles.high;
  }

  return (
    <div className={styles.progressBar}>
      <div
        className={`${styles.progress} ${colorClass}`}
        style={{
          width: `${progressPercentage}%`,
        }}
      />
    </div>
  );
};
