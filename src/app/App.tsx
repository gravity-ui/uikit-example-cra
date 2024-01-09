import './styles/index.scss';
import React, { Suspense, useState } from 'react';
import { AppRouter } from './AppRouter';
import { Header } from 'src/components/layout/Header/Header';
import { Footer } from './../components/layout/Footer/Footer';

import navSite from '../markdown/navSite';
import { Loader } from '@gravity-ui/uikit';




export const App = () => {
  const [titlePage, setTitlePage] = useState("");
  const [navPart, setNavPart] = useState([{ id: 0, name: "", path: "/" }]);

  return (
    <>
      <Suspense fallback={<Loader size="l" />}>
        <Header titlePage={titlePage} headerNav={navPart} />
        <div className="page-wrapper">
          <AppRouter navSite={navSite}
            setTitlePage={setTitlePage}
            setNavPart={setNavPart}
          />
        </div>
        <Footer nav={navSite} />
      </Suspense>
    </>
  );
};
