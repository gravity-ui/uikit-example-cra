import Markdown from 'markdown-to-jsx';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import cls from "./ShowMd.module.scss";
import { Link } from '@gravity-ui/uikit';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript'; // import JS highlighting
hljs.registerLanguage('javascript', javascript); // import XML highlighting
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);
import bash from 'highlight.js/lib/languages/bash';
hljs.registerLanguage('bash', bash);
import 'highlight.js/scss/default.scss';



export interface ShowMdProps {
  fileName: string;
  fileTitle?: string;
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

  useLayoutEffect(() => {
    hljs.highlightAll();
  }, [post]);

  return (
    <article className={cls.ShowMd}>
      <Markdown options={{
        overrides: {
          createElement: 'article',
          a: {
            component: Link,
            props: {
              view: 'normal',
              target: '_blank'
            },
          },
        },
      }}>
        {post}
      </Markdown>

    </article >
  );
}

