import React from 'react';
import cls from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import { Text } from '@gravity-ui/uikit';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';





export const Header = () => {

  return (
    <div className={cls.Header}>
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
  );
};



