import './styles/index.scss';
import React, { useState } from 'react';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { AppRouter } from './AppRouter';
import { Header } from 'src/components/layout/Header/Header';
import { Footer } from './../components/layout/Footer/Footer';

import navSite from '../markdown/navSite';



export const App = () => {
  const [titlePage, setTitlePage] = useState("");
  const [navPart, setNavPart] = useState([{ id: 0, name: "", path: "/" }]);

  return (
    <AppThemeProvider>
      <Header titlePage={titlePage} headerNav={navPart} />
      <div className="page-wrapper">
        <AppRouter navSite={navSite}
          setTitlePage={setTitlePage}
          setNavPart={setNavPart}
        />
      </div>
      <Footer nav={navSite} />
    </AppThemeProvider >
  );
};
