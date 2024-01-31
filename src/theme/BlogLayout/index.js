import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0; 

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row" style={{justifyContent:'center'}}>
          <main
            className={clsx('col', 'col--8')}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          <div className="col col--3">
            <BlogSidebar sidebar={sidebar} />
            {toc && toc}
          </div>
        </div>
      </div>
    </Layout>
  );
}
