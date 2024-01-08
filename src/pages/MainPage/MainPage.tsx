import React, { SetStateAction, useState } from "react";
import { ShowMd } from "src/components/ShowMd/ShowMd";
import { useGetPost } from "src/utils/useGetPost/useGetPost";
import cls from "./MainPage.module.scss"



export interface MainPageProps {
  setTitlePage: React.Dispatch<SetStateAction<string>>
  // isIndex?: boolean;
}

export const MainPage: React.FC<MainPageProps> = (props) => {
  const { setTitlePage } = props;
  setTitlePage("Конспекты");

  const fileName = "readme.md";
  const [post, setPost] = useState("");

  useGetPost({ fileName, setPost });

  return (
    <main className={cls.MainPage}>
      <ShowMd post={post} isIndex={true} />
    </main>
  );
}
