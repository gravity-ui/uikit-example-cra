import React, { SetStateAction, useEffect, useState } from "react";
import { ShowMd } from "src/components/ShowMd/ShowMd";
import { useGetPost } from "src/utils/useGetPost/useGetPost";
import cls from "./ContentPage.module.scss"
import { TypeNavLink } from "src/markdown/navSite";
import { useParams } from "react-router-dom";



export const getNavFromIndex = ((index: string) => {
  const regex = /## \[(.*?)\]\((.*?)\) ##/g;
  const matches = index.matchAll(regex);
  let id = 0;
  const result = Array.from(matches, match => ({
    id: id++,
    name: match[1],
    path: match[2]
  }));
  return result;

})


export interface ContentPageProps {
  setTitlePage: React.Dispatch<SetStateAction<string>>
  setNavPart: React.Dispatch<React.SetStateAction<TypeNavLink[]>>;
  navItem: TypeNavLink;
}


export const ContentPage: React.FC<ContentPageProps> = (props) => {
  const { setTitlePage, setNavPart, navItem } = props;

  const { fileName } = useParams();

  setTitlePage(`КОНСПЕКТЫ  ${navItem.name} `);

  const indexName = navItem.path + "/index.md";
  const contentName = navItem.path + "/" + fileName + ".md";

  const [post, setPost] = useState("");
  const [index, setIndex] = useState("");

  useGetPost({
    fileName: indexName,
    setPost: setIndex
  });

  useGetPost({
    fileName: contentName,
    setPost
  });


  useEffect(() => {
    const navFromIndex = getNavFromIndex(index);
    console.log(navFromIndex);
    setNavPart(navFromIndex);
  }, [index, setNavPart]);

  return (
    <main className={cls.ContentPage} >
      <ShowMd post={post} isIndex={false} />
    </main>
  );
}