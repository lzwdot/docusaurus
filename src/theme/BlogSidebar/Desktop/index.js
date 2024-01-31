import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

import styles from './styles.module.css';

export default function BlogSidebarDesktop({ sidebar }) {
  const { siteConfig: {organizationName, customFields } } = useDocusaurusContext();
  const location = useLocation();

  let createUrl = '';
  let createLabel = '';
  if (customFields['createQuestion'] || customFields['createPost']) {
    const createField = location.pathname.indexOf('question') == 1 ? customFields['createQuestion'] : customFields['createPost'];
    createUrl = createField.repo ? `https://github.com/${organizationName}/${createField.repo}/issues` : '';
    createLabel = createField.label;
  }

  return (
    <aside className="col" style={{ paddingLeft: 0 }}>
      {createUrl && createLabel && <Link
        className="col button button--primary margin-bottom--lg shadow--lw"
        itemProp="url"
        to={createUrl}
      >
        {createLabel}
      </Link>}
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
