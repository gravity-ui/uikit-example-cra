import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShowPage } from 'src/components/ShowPage/ShowPage';

const partNames: Array<string> = ['js', 'react', 'web'];

export const AppRouter = () => {

  return (

    <Routes>
      <Route path="/"
        element={<ShowPage partName="" titlePage="Разделы" />}
      />
      {partNames.map((val) => (
        <Route path={`/${val}`} key={val} >
          <Route
            index
            element={
              <ShowPage
                partName={val}
                titlePage={`${val.toUpperCase()} Конспекты`}
              />
            }
          />
          <Route
            path=":fileName"
            element={
              <ShowPage
                partName={val}
                titlePage={`${val.toUpperCase()} Конспекты`}
              />
            }
          />
        </Route>
      ))};
    </Routes>
  );
};
