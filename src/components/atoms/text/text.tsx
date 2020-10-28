import React, { FC } from 'react';
import styles from './text.module.scss';

type Props = {
  text: string;
};

export const H1: FC<Props> = ({ text }) => {
  return <h1 className={styles.heading1}>{text}</h1>;
};

export const H3: FC<Props> = ({ text }) => {
  return <h3 className={styles.heading3}>{text}</h3>;
};
