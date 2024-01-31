import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comments from '../../components/Comments'
import {useBlogPost} from '@docusaurus/theme-common/internal';


export default function BlogPostItemWrapper(props) { 
  const {isBlogPostPage} = useBlogPost()
 
  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <Comments {...{type:'blog'}}/>}
    </>
  );
}
