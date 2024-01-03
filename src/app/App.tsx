import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import cls from './App.module.scss';
import { AppThemeProvider, ThemeSwitcher } from './providers/AppThemeProvider';
import { ShowMd } from 'src/components/ShowMd/ShowMd';
import { Text } from '@gravity-ui/uikit';
import { Logo } from 'src/components/Logo/Logo';

export interface ShowPageProps {
  partName: string | undefined;
}

const partNames: Array<string> = ['js', 'react', 'web'];

export const App = () => {
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
    <AppThemeProvider>
      <div className={cls.App}>
        <div className={cls.header}>
          <Logo />
          <div>
            <Text
              className={cls.title}
              color={"brand"}
            >
              Краткий справочник реакт-разработчика
            </Text>
          </div>
          <ThemeSwitcher />
        </div>

        <BrowserRouter>
          <Routes>
            {partNames.map((val) => (
              <Route path={`/${val}`} key={val} >
                <Route path=":fileName" element={<ShowPage partName={val} />} />
              </Route>
            ))};
          </Routes>
        </BrowserRouter>
      </div>
    </AppThemeProvider >
  );
};
