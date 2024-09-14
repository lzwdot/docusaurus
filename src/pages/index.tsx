import dayjs from "dayjs";
import clsx from "clsx";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useTitleFormatter } from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import Head from "@docusaurus/Head";
import { useLocation } from '@docusaurus/router';
import latestPosts from "./../data/latest.json";
import SearchPage from "../components/SearchPage";
function HomeLogo() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <img
        src="https://open.weixin.qq.com/qr/code?username=jslangcn"
        alt={siteConfig.title}
        loading="lazy"
        className="max-w-56"
      />
    </div>
  );
}

function LatestPosts() {
  const location = useLocation();
  const isSearching = location.search.includes("?q=") ? true : false;
  return (
    isSearching ? '' : <div>
      <ul className="list-[square]">
        {latestPosts.map((v) => (
          <li key={v.slug}>
            {dayjs(v.date).format("YYYY年MM月DD日")} »{" "}
            <a href={`/${v.type}${v.slug}`}>{v.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <Head>
        <title>{useTitleFormatter(siteConfig.tagline)}</title>
      </Head>
      <main className="container !max-w-screen-md mt-24">
        <div className="grid grid-cols-12">
          <div className="sm:col-span-8 col-span-12">
            <SearchPage />
            <div className="flex sm:justify-start justify-center">
              <LatestPosts />
            </div>
          </div>
          <div className="sm:col-span-4 col-span-12 flex justify-center sm:order-last order-first">
            <HomeLogo />
          </div>
        </div>
      </main>
    </Layout>
  );
}
