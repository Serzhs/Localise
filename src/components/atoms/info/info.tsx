import React, { FC } from 'react';
import styles from './info.module.scss';

type Props = {
  label: string;
  value: string | number;
  highlighted?: boolean;
  large?: boolean;
};

export const Info: FC<Props> = ({ label, value, highlighted = false, large = false }) => (
  <div className={styles.wrapper}>
    <span className={styles.label}>{label}</span>
    <span className={`${styles.value} ${large && styles.valueLarge} ${highlighted && styles.valueHighlighted}`}>{value}</span>
  </div>
);
