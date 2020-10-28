import React, { FC } from 'react';
import styles from './tag.module.scss';

type Props = {
  label: string;
  type?: 'green' | 'grey';
};

export const Tag: FC<Props> = ({ label, type = 'green' }) => {
  return <span className={`${styles.tag} ${type === 'green' && styles.green} ${type === 'grey' && styles.grey}`}>{label}</span>;
};
