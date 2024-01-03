import React from 'react';
import cls from './App.module.scss';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { Header } from 'src/components/Header/Header';
import { AppRouter } from './AppRouter';



export const App = () => {



  return (
    <AppThemeProvider>
      <div className={cls.App}>
        <Header />
        <AppRouter />
      </div>
    </AppThemeProvider >
  );
};
