import { compiler } from 'markdown-to-jsx';
import React, { useState, useEffect } from 'react';
import { ShowMd } from 'src/components/ShowMd/ShowMd';




const addNav = (jsxPost: React.JSX.Element) => {


  console.log(jsxPost);

  //const newPost = createElement(jsxPost as React.FC)
  // const newPost = generateHeadingsArray(jsxPost as HTMLElement);

  return jsxPost;

}



export interface GetPostProps {
  fileName: string | undefined;
  isIndex: boolean;
}



export const GetPost = (props: GetPostProps) => {
  const {
    fileName,
    isIndex,
  } = props;
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../../markdown/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => {
            setPost(res);
            addNav(compiler(res) as React.JSX.Element)
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    console.log(post);

  });


  return (
    <ShowMd post={post} isIndex={isIndex} />
  );
}

