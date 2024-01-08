import React from 'react';
import cls from './Header.module.scss';
import { Logo } from '../../Logo/Logo';
import { Text } from '@gravity-ui/uikit';
import { ThemeSwitcher } from '../../ThemeSwitcher/ThemeSwitcher';


export interface HeaderProps {
  titlePage: string;
}


export const Header = (props: HeaderProps) => {
  const { titlePage } = props;
  return (
    <header className={cls.Header}>
      <Logo />
      <div>
        <Text
          variant="header-1"
          color={"info"}
        >
          {titlePage}
        </Text>
      </div>
      <ThemeSwitcher />
    </header>
  );
};


