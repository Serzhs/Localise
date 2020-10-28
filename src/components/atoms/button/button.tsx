import React, { FC } from 'react';
import styles from './button.module.scss';

type Props = {
  label: string;
  type?: 'blank';
  onClick?: () => void;
};

export const Button: FC<Props> = ({ label, type, onClick }) => {
  return (
    <button className={`${styles.button} ${type === 'blank' && styles.blank}`} type="button" onClick={onClick}>
      {label}
    </button>
  );
};
