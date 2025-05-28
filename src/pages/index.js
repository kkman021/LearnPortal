import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ProductCard from "@site/src/components/ProductCard";
import ResourceCard from "@site/src/components/ResourceCard";
import NewsCard from "@site/src/components/NewsCard";

import styles from "./index.module.scss";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={`${styles.banner} relative flex h-[300px] w-full items-center bg-cover bg-center bg-no-repeat before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-r before:from-black before:via-black/50 before:to-black/0 before:content-['']`}
    >
      <div className="container relative">
        <h1 className="text-h1 mb-4 line-clamp-2 text-white">
          {siteConfig.title}
        </h1>
        <div className="hidden tablet:block">
          <p className="mb-5 line-clamp-3 max-w-[760px] text-white desktop:line-clamp-2">
            From intelligent device orchestration to low-code IoT application development, WISE-Edge empowers you with the tools, APIs, and runtime services to create at scale.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Advantech | Flattening Knowledge, Bridging Software and Hardware - Your Gateway to Application Development"
    >
      <HomepageHeader />
      <main>
        <ProductCard />
        <ResourceCard />
        <NewsCard />
      </main>
    </Layout>
  );
}
