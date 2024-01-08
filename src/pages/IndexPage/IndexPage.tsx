import React, { SetStateAction, useState } from "react";
import { ShowMd } from "src/components/ShowMd/ShowMd";
import { useGetPost } from "src/utils/useGetPost/useGetPost";
import cls from "./IndexPage.module.scss"



export interface IndexPageProps {
  setTitlePage: React.Dispatch<SetStateAction<string>>
  partName: string;
}

export const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { setTitlePage, partName } = props;
  setTitlePage(`Конспекты ( ${partName.toUpperCase()} )`);

  const fileName = partName + "/index.md";
  const [post, setPost] = useState("");

  useGetPost({ fileName, setPost });

  return (
    <main className={cls.IndexPage}>
      <ShowMd post={post} isIndex={true} />
    </main>
  );
}