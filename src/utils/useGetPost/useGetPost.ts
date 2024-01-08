import React, { useEffect } from 'react';


export interface GetPostProps {
  fileName: string;
  setPost: React.Dispatch<React.SetStateAction<string>>;
}



export const useGetPost = (props: GetPostProps) => {
  const {
    fileName,
    setPost,
  } = props;
  //const [post, setPost] = useState('');

  useEffect(() => {
    import(`../../markdown${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  });
  return;
}

