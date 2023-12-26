import React from 'react';
import cls from './App.module.scss';
import { AppThemeProvider, ThemeSwitcher } from './providers/AppThemeProvider';
import { ShowMd } from 'src/components/ShowMd/ShowMd';
import { Text } from '@gravity-ui/uikit';
import { Logo } from 'src/components/Logo/Logo';


export const App = () => {
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
        <ShowMd fileName="01_02_hooks.md" />
      </div>
    </AppThemeProvider>
  );
};
