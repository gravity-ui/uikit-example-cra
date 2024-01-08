import React from "react";
import Button from "../../ui/button/button.jsx";
import { AppRoute } from "../../../const.js";
import { useLocation } from "react-router-dom";
import { StyledButton } from "./styles.js";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: `/${AppRoute.BUY}`,
    button: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
      </nav>
    </nav>
  );
}

export default Nav;