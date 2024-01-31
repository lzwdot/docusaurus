import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function Comments(props) {
  const { colorMode } = useColorMode();
  let { type, category, categoryId } = props
  category = 'comments'
  categoryId = 'DIC_kwDOG0E0Ws4CP3EZ'

  return (
    <Giscus
      id="comments"
      repo="lzwdot/docusaurus"
      repoId="R_kgDOG0E0Wg"
      category={category}
      categoryId={categoryId}
      mapping="title"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
    />
  );
}