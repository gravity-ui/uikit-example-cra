import React from "react";
import cls from "./Footer.module.scss";
import { Logo } from "src/components/Logo/Logo";
import { Button, Label } from '@gravity-ui/uikit';

interface NavLinks {
  id: number,
  name: string,
  path: string
}

export type FooterProps = {
  nav: NavLinks[]
};


export const Footer: React.FC<FooterProps> = ({ nav }) => {
  console.log(nav);

  return (
    <div className={cls.Footer}>
      <Logo />
      {nav.map(val => (
        <Button key={"b" + val.id} view="outlined" href={val.path}>{val.name} </Button>
      ))}
      <Label theme="info" >(С) 2024</Label>
    </div >
  );
}

