import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Comments from '../../../components/Comments'
import {useDoc} from '@docusaurus/theme-common/internal';

export default function FooterWrapper(props) {
  const {frontMatter} = useDoc()
  return (
    <>
      <Footer {...props} />
      {frontMatter?.ID && <Comments {...{ type: 'docs' }} />}
    </>
  );
}
