import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShowPage } from 'src/components/ShowPage/ShowPage';

const partNames: Array<string> = ['js', 'react', 'web'];

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<ShowPage partName="" titlePage="Разделы" />}
        />
        {partNames.map((val) => (
          <Route path={`/${val}`} key={val}>
            <Route
              path=":fileName"
              element={
                <ShowPage
                  partName={val}
                  titlePage={`${val.toUpperCase()} Конспекты`}
                />
              }
            />
            <Route
              path=""
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
    </BrowserRouter >
  );
};
