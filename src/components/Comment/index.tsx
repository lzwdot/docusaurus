import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Giscus from '@giscus/react';

export default function Comment(props) {
  const { colorMode } = useColorMode();
  let { type } = props

  return (
    <Giscus
      id="comment"
      repo="lzwdot/docusaurus"
      repoId="R_kgDOLMEUdA"
      category="Announcements"
      categoryId="R_kgDOLMEUdA"
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
    />
  );
}