import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import BrowserOnly from "@docusaurus/BrowserOnly";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SearchPage from "../components/SearchPage";
import latestPosts from "./../config/latest-posts.json";
import moment from "moment";

import styles from "./css/index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  console.log(siteConfig)
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function LatestPosts() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly>
      {() => {
        const isSearching = location.href.includes("?q=") ? true : false;
        return isSearching ? (
          ""
        ) : (
          <div>
            <ul style={{ listStyle: "square", textAlign: "left" }}>              
              {latestPosts.map((v) => (
                <li key={v.ID}>
                  {moment(v.date).format("YYYY年MM月DD日")} »{" "}
                  <a href={`${siteConfig.baseUrl}${v.type}${v.slug}`}>{v.title}</a>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </BrowserOnly>
  );
}
function MyHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container" style={{ maxWidth: "1024px" }}>
        <div className="row">
          <div className={clsx("col col--8")} style={{ margin: "auto" }}>
            <div style={{ textAlign: "center" }}>
              {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
            <LatestPosts></LatestPosts>
          </div>
          {/* <div className={clsx('col col--4')}>
            <p><img src='./img/undraw_version_control.svg'/></p>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <Head>
        <title>{`${siteConfig.title}- ${siteConfig.tagline}`}</title>
      </Head>
      {/* <HomepageHeader /> */}
      <main>
        {/* <HomepageFeatures /> */}
        <MyHeader></MyHeader>
      </main>
    </Layout>
  );
}
