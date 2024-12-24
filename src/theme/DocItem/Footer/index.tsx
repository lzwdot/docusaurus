import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Comment from '../../../components/Comment'

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const {frontMatter} = useDoc();
  
  return (
    <>
      <Footer {...props} />
      {/* {frontMatter.slug && <Comment {...{ type: 'docs' }} />} */}
    </>
  );
}
