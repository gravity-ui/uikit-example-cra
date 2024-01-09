import { Link } from "@gravity-ui/uikit";
import React from "react";
import cls from "./MdNavigation.module.scss"


interface Heading {
  text: string;
  id: string;
}

interface MdNavigationProps {
  headings: Heading[];
}

const MdNavigation: React.FC<MdNavigationProps> = ({ headings }) => {
  //     <Card type="container" theme="normal" >
  return (

    <nav className={cls.MdNavigation}>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <Link href={`#${heading.id}`}>{heading.text}</Link>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default MdNavigation;