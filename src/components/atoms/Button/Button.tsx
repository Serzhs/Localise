import React, { FC } from 'react';
import styles from './Button.module.scss';

export const Button: FC = () => {
  return (
    <button className={styles.button} type="button">
      This is button
    </button>
  );
};
