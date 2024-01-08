import './styles/index.scss';
import React, { useState } from 'react';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { AppRouter } from './AppRouter';
import { Header } from 'src/components/layout/Header/Header';
import { Footer } from './../components/layout/Footer/Footer';

import navSite from '../markdown/navSite';



export const App = () => {
  const [titlePage, setTitlePage] = useState("");

  return (
    <AppThemeProvider>
      <Header titlePage={titlePage} />
      <div className="page-wrapper">
        <AppRouter
          setTitlePage={setTitlePage}
        />
      </div>
      <Footer nav={navSite} />
    </AppThemeProvider >
  );
};
