import React, { FC, useRef } from 'react';
import Select, { ValueType } from 'react-select';
import styles from './languageSelectModal.module.scss';
import { Button } from '../../atoms/button/button';

export type Language = {
  value: string;
  label: string;
};

const languages: Language[] = [
  { value: 'lv', label: 'Latvian' },
  { value: 'ru', label: 'Russian' },
  { value: 'GB', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'it', label: 'Italian' },
  { value: 'est', label: 'Estonian' },
  { value: 'cn', label: 'Chinese' },
];

type Props = {
  onLanguageChange: (languages: Language[]) => void;
  onClose: () => void;
};

export const LanguageSelectModal: FC<Props> = ({ onLanguageChange, onClose }) => {
  const selectedValues = useRef<ValueType<Language>>([]);

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h2 className={`${styles.heading} margin-bottom--4`}>Add languages</h2>
        <div className="margin-bottom--5">
          <Select
            options={languages}
            isMulti={true}
            onChange={(selectedItems) => {
              selectedValues.current = selectedItems;
            }}
          />
        </div>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttonWrapper}>
            <Button label="Close" type="blank" onClick={() => onClose()} />
          </div>
          <div className={styles.buttonWrapper} data-test-id="submit-language-modal-button">
            <Button label="Add" onClick={() => onLanguageChange(selectedValues.current as Language[])} />
          </div>
        </div>
      </div>
    </div>
  );
};
