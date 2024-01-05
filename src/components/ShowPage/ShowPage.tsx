import React from 'react';
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import cls from "./ShowPage.module.scss"
import { GetPost } from 'src/utils/GetPost/GetPost';

export interface ShowPageProps {
  partName: string | undefined;
  titlePage: string;
  // isIndex?: boolean;
}

export const ShowPage = (props: ShowPageProps) => {
  const { partName, titlePage } = props;
  const { fileName } = useParams();
  const isIndex = !fileName;
  const indexPage = ((partName === "") ? "" : (partName + "/")) + "index.md";
  const contentPage = partName + "/" + fileName + ".md";


  return (
    <>
      <Header titlePage={titlePage} />
      {isIndex ?
        <main>
          <GetPost fileName={indexPage} isIndex={true} />
        </main>
        : <div className={cls.ShowPage}>
          <nav>
            <GetPost fileName={indexPage} isIndex={true} />
          </nav>
          <main>

            <GetPost fileName={contentPage} isIndex={false} />
          </main>
        </div>
      }
    </>
  );
}
