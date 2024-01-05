import Markdown from 'markdown-to-jsx';
import React, { useLayoutEffect, useRef, useState } from 'react';
import cls from "./ShowMd.module.scss";
import { Link, Card } from '@gravity-ui/uikit';
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
import MdNavigation from '../MdNavigation/MdNavigation';



export interface ShowMdProps {
  post: string;
  isIndex: boolean;
}

interface Heading {
  text: string;
  id: string;
}

function generateHeadingsArray(article: HTMLElement | null): Heading[] {
  if (article == null) return []

  const h2Tags = article.getElementsByTagName('h2');
  const headings: Heading[] = [];
  for (let i = 0; i < h2Tags.length; i++) {
    const h2Tag = h2Tags[i];
    const text = h2Tag.textContent || '';
    const newId = `h2-${i + 1}`;
    h2Tag.id = newId;
    headings.push({ text, id: newId });
  }
  return headings;
}


export const ShowMd = (props: ShowMdProps) => {
  const {
    post,
    isIndex,
  } = props;

  const articleRef = useRef(null);

  const [headings, setHeadings] = useState<Heading[]>([])
  //let headings: Heading[] = [];

  const mdProps = isIndex ?
    {
      view: 'normal'
    }
    :
    {
      view: 'normal',
      target: '_blank'
    };

  useLayoutEffect(() => {
    const element: HTMLElement | null = articleRef.current;
    if (element) {
      if (!isIndex) {
        const arrayH2 = generateHeadingsArray(element);
        setHeadings(arrayH2);
      }
      hljs.highlightAll();
    }
  }, [post, articleRef, isIndex]);


  return (
    <article ref={articleRef} className={isIndex ? cls.showMdBlock : cls.showMdGrid}>
      <Card type="container" theme="normal" className={cls.card}>
        <Markdown options={{
          overrides: {
            wrapper: React.Fragment,
            a: {
              component: Link,
              props: mdProps,
            },
          },
        }}>
          {post}
        </Markdown>
      </Card>
      {isIndex ? null : (

        <MdNavigation headings={headings} />

      )
      }
    </article >
  );
}

