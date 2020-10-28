import React, { FC } from 'react';
import { Button } from '../atoms/Button/Button';

export const Home: FC = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Homepage</h1>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};
