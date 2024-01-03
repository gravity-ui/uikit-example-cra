import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { ShowMd } from 'src/components/ShowMd/ShowMd';

export interface ShowPageProps {
  partName: string | undefined;
}

const partNames: Array<string> = ['js', 'react', 'web'];

export const AppRouter = () => {

  const ShowPage = (props: ShowPageProps) => {
    const { partName } = props;
    let { fileName } = useParams();
    fileName = partName + "/" + fileName + ".md";

    return (
      { fileName } ?
        <ShowMd fileName={fileName} />
        : null
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {partNames.map((val) => (
          <Route path={`/${val}`} key={val} >
            <Route path=":fileName" element={<ShowPage partName={val} />} />
          </Route>
        ))};
      </Routes>
    </BrowserRouter>
  );
};
