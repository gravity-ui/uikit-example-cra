import React from 'react';
import logo from '../../assets/logo.svg';
import cls from './Logo.module.scss';
import { Link } from '@gravity-ui/uikit';


export const Logo = () => {
  return (
    <div className={cls.Logo}>
      <Link href="/">
        <img src={logo} height="35px" />
      </Link>
    </div>
  );
};
