import React from "react";
import { useLocation } from "react-router-dom";
import { TypeNavLink } from '../../../markdown/navSite';
import { Button } from "@gravity-ui/uikit";

interface NavProps {
  nav: Array<TypeNavLink>;
}

export const Nav: React.FC<NavProps> = ({ nav }) => {
  const pageUrl = useLocation().pathname;
  return (
    <>
      {
        nav.map(val => (
          <Button
            key={"b" + val.id}
            view="outlined"
            href={val.path}
            disabled={pageUrl == val.path}
          >
            {val.name}
          </Button >
        ))
      }
    </>
  )
}

// function Nav() {
//   const pageUrl = useLocation().pathname;
//   return (
//     <nav>
//       <nav>
//         {buttons
//           .filter((button) => button.to !== pageUrl)
//           .map((button) => button.button)}
//       </nav>
//     </nav>
//   );
// }

export default Nav;