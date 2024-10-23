import React, { useEffect } from 'react';
import styles from "./styles.module.scss";
import feeds from "../../data/feed.json";

export default function Feed(props) {
  const { source } = props
  const { title, description, items = [] } = feeds[source] || {}

  return (
    <section>
      <div className={styles.description}>
        {/* <div className={styles.info}>
          <strong>This is an RSS feed</strong>. Subscribe by copying the URL
          from the address bar into your newsreader. Visit
          <a href="https://aboutfeeds.com/">About Feeds</a> to learn more
          and get started. It’s free.
        </div> */}
        <h1>
          <div className={styles.rssIcon}>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 455.731 455.731"
              xmlSpace="preserve">
              <g>
                <rect
                  x="0"
                  y="0"
                  style={{ fill: '#f78422' }}
                  width="455.731"
                  height="455.731"
                />
                <g>
                  <path
                    style={{ fill: '#ffffff' }}
                    d="M296.208,159.16C234.445,97.397,152.266,63.382,64.81,63.382v64.348
            c70.268,0,136.288,27.321,185.898,76.931c49.609,49.61,76.931,115.63,76.931,185.898h64.348
            C391.986,303.103,357.971,220.923,296.208,159.16z"
                  />
                  <path
                    style={{ fill: '#ffffff' }}
                    d="M64.143,172.273v64.348c84.881,0,153.938,69.056,153.938,153.939h64.348
            C282.429,270.196,184.507,172.273,64.143,172.273z"
                  />
                  <circle
                    style={{ fill: '#ffffff' }}
                    cx="109.833"
                    cy="346.26"
                    r="46.088"
                  />
                </g>
              </g>
            </svg>
          </div>
          {title}
        </h1>
        <p className={styles.blogDescription}>
          {description}
        </p>
      </div>
      <h2>最新文章</h2>
      <div className={styles.blogPosts}>
        {items.map(item => {
          return <div className={styles.blogPost} key={item.link}>
            <h3><a href={item.link} target='_blank'>{item.title}</a></h3>
            <div className={styles.blogPostDate}>
              发布于 {item.pubDate.substring(0, 16)}
            </div>
            <div className={styles.blogPostDescription}>
              <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </div>
          </div>
        })}
      </div>
    </section>
  );
}