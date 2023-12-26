import React from 'react';
import logo from '../../assets/logo.svg';
import cls from './Logo.module.scss';


export const Logo = () => {
  return (
    <div className={cls.Logo}>
      <img src={logo} width="60px" />
    </div>
  );
};
