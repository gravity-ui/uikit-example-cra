import React from 'react';
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { ShowMd } from "../ShowMd/ShowMd";

export interface ShowPageProps {
  partName: string | undefined;
  titlePage: string;
  // isIndex?: boolean;
}

export const ShowPage = (props: ShowPageProps) => {
  const { partName, titlePage } = props;
  const { fileName } = useParams();
  const isIndex = !fileName;
  console.log(partName, titlePage, isIndex, fileName);

  const fullName = ((partName === "") ? "" : (partName + "/"))
    + (isIndex ? "index.md" : fileName + ".md");

  console.log(fullName);


  return (
    <>
      <Header titlePage={titlePage} />
      <main>
        {fullName ?
          <ShowMd fileName={fullName} isIndex={isIndex} />
          : null
        }
      </main>
    </>
  );
}
