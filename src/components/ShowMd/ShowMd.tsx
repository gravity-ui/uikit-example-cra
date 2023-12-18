import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';
import cls from "./ShowMd.module.scss";


export interface ShowMdProps {
  fileName: string;
}


export const ShowMd = (props: ShowMdProps) => {
  const {
    fileName
  } = props;
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../../markdown/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });

  return (
    <div className={cls.ShowMd}>
      <Markdown>
        {post}
      </Markdown>
    </div>
  );
}
