import React from "react";
import cls from "./Footer.module.scss";
import { Logo } from "src/components/Logo/Logo";
import { Label } from '@gravity-ui/uikit';

export const Footer = () => {
  return (
    <div className={cls.Footer}>
      <Logo />
      <Label theme="info" value="2024">Создано</Label>
    </div >
  );
}

