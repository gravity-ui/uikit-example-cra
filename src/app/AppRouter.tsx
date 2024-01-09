import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TypeNavLink } from 'src/markdown/navSite';
import { IndexPage } from 'src/pages/IndexPage/IndexPage';
import { MainPage } from 'src/pages/MainPage/MainPage';
import { ContentPage } from 'src/pages/ContentPage/ContentPage';

type AppRouterProps = {
  setTitlePage: React.Dispatch<React.SetStateAction<string>>;
  setNavPart: React.Dispatch<React.SetStateAction<TypeNavLink[]>>;
  navSite: TypeNavLink[];

}

export const AppRouter: React.FC<AppRouterProps> = (props) => {
  const { setTitlePage, setNavPart, navSite } = props;

  return (
    <Routes>
      <Route path="/"
        element={<MainPage setTitlePage={setTitlePage} />}
      />
      {navSite.map((val) => (
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
          <Route
            path=":fileName"
            element={
              <ContentPage
                navItem={val}
                setTitlePage={setTitlePage}
                setNavPart={setNavPart}
              />
            }
          />
        </Route>
      ))};
    </Routes>
  );
};
