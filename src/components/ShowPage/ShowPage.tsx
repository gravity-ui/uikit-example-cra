import React, { SetStateAction } from 'react';
import { useParams } from "react-router-dom";
import cls from "./ShowPage.module.scss"
import { GetPost } from 'src/utils/GetPost/GetPost';


export interface ShowPageProps {
  partName: string | undefined;
  setTitlePage: React.Dispatch<SetStateAction<string>>
  // isIndex?: boolean;
}

export const ShowPage: React.FC<ShowPageProps> = (props) => {
  const { partName, setTitlePage } = props;
  const { fileName } = useParams();
  const isIndex = !fileName;
  const indexPage = ((partName === "") ? "" : (partName + "/")) + "index.md";
  const contentPage = partName + "/" + fileName + ".md";

  const titlePage = partName?.toUpperCase() + " " + (isIndex ? "Разделы" : "Конспекты");
  setTitlePage(titlePage);

  return (
    <>
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
