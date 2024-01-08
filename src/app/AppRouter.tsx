import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IndexPage } from 'src/pages/IndexPage/IndexPage';
import { MainPage } from 'src/pages/MainPage/MainPage';

const partNames: Array<string> = ['js', 'react', 'web'];

// export const PageTypes {
//   MAIN: 'main',
//   INDEX: 'index',
//   CONTENT: 'content',
// }

type AppRouterProps = {
  setTitlePage: React.Dispatch<React.SetStateAction<string>>;
}

export const AppRouter: React.FC<AppRouterProps> = (props) => {
  const { setTitlePage } = props;

  return (

    <Routes>
      <Route path="/"
        element={<MainPage setTitlePage={setTitlePage} />}
      />
      {partNames.map((val) => (
        <Route path={`/${val}`} key={val} >
          <Route
            index
            element={
              <IndexPage
                partName={val}
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
