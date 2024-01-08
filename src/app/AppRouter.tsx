import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TypeNavLink } from 'src/markdown/navSite';
import { IndexPage } from 'src/pages/IndexPage/IndexPage';
import { MainPage } from 'src/pages/MainPage/MainPage';

type AppRouterProps = {
  setTitlePage: React.Dispatch<React.SetStateAction<string>>;
  nav: TypeNavLink[];
}

export const AppRouter: React.FC<AppRouterProps> = (props) => {
  const { setTitlePage, nav } = props;

  return (

    <Routes>
      <Route path="/"
        element={<MainPage setTitlePage={setTitlePage} />}
      />
      {nav.map((val) => (
        <Route path={val.path} key={val.id} >
          <Route
            index
            element={
              <IndexPage
                navItem={val}
                setTitlePage={setTitlePage}
              />
            }
          />
          {/* <Route
            path=":fileName"
            element={
              <ContentPage
                partName={val}
                setTitlePage={setTitlePage}
              />
            }
          /> */}
        </Route>
      ))};
    </Routes>
  );
};
