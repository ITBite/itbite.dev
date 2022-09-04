import * as React from 'react';
import style from './PageTemplate.module.scss';

export const PageTemplate = ({ children }) => {
  return (
    <main className={style.container}>
      {children}
    </main>
  );
};
