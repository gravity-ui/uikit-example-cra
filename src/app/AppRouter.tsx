import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShowPage } from 'src/components/ShowPage/ShowPage';

const partNames: Array<string> = ['js', 'react', 'web'];

type AppRouterProps = {
  setTitlePage: React.Dispatch<React.SetStateAction<string>>;
}

export const AppRouter: React.FC<AppRouterProps> = ({ setTitlePage }) => {

  return (

    <Routes>
      <Route path="/"
        element={<ShowPage partName="" setTitlePage={setTitlePage} />}
      />
      {partNames.map((val) => (
        <Route path={`/${val}`} key={val} >
          <Route
            index
            element={
              <ShowPage
                partName={val}
                setTitlePage={setTitlePage}
              />
            }
          />
          <Route
            path=":fileName"
            element={
              <ShowPage
                partName={val}
                setTitlePage={setTitlePage}
              />
            }
          />
        </Route>
      ))};
    </Routes>
  );
};
