import React, { FC, useState } from 'react';
import styles from './dashboard.module.scss';
import { Button } from '../../atoms/button/button';
import { Tag } from '../../atoms/tag/tag';
import { Info } from '../../atoms/info/info';
import { H1 } from '../../atoms/text/text';
import { Progress } from '../../atoms/progress/progress';
import { LanguageCard } from '../../molecules/languageCard/languageCard';
import { Language, LanguageSelectModal } from '../../molecules/languageSelectModal/languageSelectModal';
import arrowUpIcon from '../../../images/icons/arrow-up.svg';
import arrowBottomIcon from '../../../images/icons/arrow-bottom.svg';
import checkIcon from '../../../images/icons/check.svg';
import userIcon from '../../../images/icons/user.svg';
import analyseIcon from '../../../images/icons/analytics.svg';
import cameraIcon from '../../../images/icons/camera.svg';
import bookIcon from '../../../images/icons/book.svg';
import { dashboardInfo, languageExtended } from '../../../mock-data/mock-data';
import useLocalStorage from '../../../hooks/useLocalStorage';

export type LanguageExtended = {
  id: number;
  progressPercentage: number;
  words: number;
  unverified: number;
  countryCode: string;
  countryName: string;
};

export const Dashboard: FC = () => {
  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [languagesFromStorage, setLanguageFromStorage] = useLocalStorage('selectedLanguages', []);
  const languages: LanguageExtended[] = languagesFromStorage || [];

  const openModal = () => {
    setLanguageModalOpen(true);
  };

  const languageAddHandler = (lang: Language[]) => {
    const extendedLang: LanguageExtended[] = lang.map(({ value, label }) => {
      return {
        ...languageExtended,
        id: languages.length + 1,
        progressPercentage: Math.floor(Math.random() * 101),
        countryCode: value,
        countryName: label,
      };
    });

    const newState = [...languages, ...extendedLang];

    setLanguageFromStorage(newState);
    setLanguageModalOpen(false);
  };

  return (
    <>
      <section className={styles.dashboard}>
        <div className="container">
          <div className="row margin-bottom--5">
            <div className="col-xs-12 flex">
              <div className={styles.buttonWrapper}>
                <Button label="New project ⇧⌘P" />
              </div>
              <div className={styles.buttonWrapper}>
                <Button label="Expand all" type="blank" />
              </div>
              <div className={styles.buttonWrapper}>
                <Button label="Collapse all" type="blank" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-md-3 col-sm-6 col-xs-12 margin-bottom--5 ${styles.sideBorder}`}>
              <div className={styles.sideBard}>
                <div className="row margin-bottom--2">
                  <div className="col-xs-12">
                    <div className="margin-bottom--3">
                      <H1 text="Roamer App (Android SDK test)" />
                    </div>
                    <div className="margin-bottom--3">
                      <Progress progressPercentage={60} />
                    </div>
                    <div className="row">
                      {dashboardInfo.map(({ id, label, value, large, highlighted }) => (
                        <div key={id} className="col-xs-6 margin-bottom--3">
                          <Info label={label} value={value} large={large} highlighted={highlighted} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row margin-bottom--2">
                  <div className="col-xs-12 flex">
                    <div className={styles.iconWrapper}>
                      <img src={arrowUpIcon} alt="up" className={styles.icon} />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img src={arrowBottomIcon} alt="down" className={styles.icon} />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img src={checkIcon} alt="check" className={styles.icon} />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img src={userIcon} alt="user" className={styles.icon} />
                    </div>
                  </div>
                  <div className="col-xs-12 flex">
                    <div className={styles.iconWrapper}>
                      <img src={analyseIcon} alt="analyse" className={styles.icon} />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img src={cameraIcon} alt="camera" className={styles.icon} />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img src={bookIcon} alt="book" className={styles.icon} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 flex">
                    <div className={styles.tagWrapper}>
                      <Tag label="Roamer" type="grey" />
                    </div>
                    <div className={styles.tagWrapper}>
                      <Tag label="iOS" type="green" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-6 col-xs-12">
              <div className={styles.content}>
                <div className="row">
                  {languages.map(({ id, countryName, countryCode, unverified, progressPercentage, words }) => {
                    return (
                      <div key={id} className="col-md-3 col-sm-6 col-xs-12 margin-bottom--4">
                        <LanguageCard
                          id={id}
                          countryCode={countryCode}
                          unverified={unverified}
                          countryName={countryName}
                          words={words}
                          progressPercentage={progressPercentage}
                        />
                      </div>
                    );
                  })}
                  <div className="col-md-3 col-sm-6 col-xs-12" data-test-id="open-language-modal-button">
                    <Button label="Add language" type="blank" onClick={() => openModal()} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {languageModalOpen && (
        <LanguageSelectModal onClose={() => setLanguageModalOpen(false)} onLanguageChange={languageAddHandler} />
      )}
    </>
  );
};
