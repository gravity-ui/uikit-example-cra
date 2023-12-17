import React from 'react';
import block from 'bem-cn-lite';
import logo from '../assets/logo.svg';
import './App.scss';
import { AppThemeProvider, ThemeSwitcher } from './providers/AppThemeProvider';

const b = block('app');


export const App = () => {
  return (
    <AppThemeProvider>
      <div className={b()}>
        <h1 className={b('header')}>UIKit example – Create React App</h1>
        <img src={logo} width="50" className={b('logo')} alt="logo" />
        <div className={b('buttons-block')}>
          <ThemeSwitcher />
        </div>
      </div>
    </AppThemeProvider>
  );
};
