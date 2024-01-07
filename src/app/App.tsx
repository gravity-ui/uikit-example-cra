import './styles/index.scss';
import React, { useState } from 'react';
import { AppThemeProvider } from './providers/AppThemeProvider';
import { AppRouter } from './AppRouter';
import { Header } from 'src/components/layout/Header/Header';
import { Footer } from './../components/layout/Footer/Footer';





export const App = () => {
  const [titlePage, setTitlePage] = useState("");
  return (
    <AppThemeProvider>
      <Header titlePage={titlePage} />
      <AppRouter setTitlePage={setTitlePage} />
      <Footer />
    </AppThemeProvider >
  );
};
