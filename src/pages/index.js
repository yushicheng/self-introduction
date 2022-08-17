import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import pdf_file from "@site/static/个人简历.pdf";
// import docx_file from "@site/static/个人简历.docx";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ margin: "10px 0px" }} className={styles.buttons}>
          <Link style={{ marginBottom: "20px" }} className="button button--secondary button--lg" to="/docs/自我介绍">
            查看详情 ⏱️
          </Link>
        </div>
        <div className={styles.buttons}>
          <a style={{ margin: "0px 10px" }} className="button button--secondary button--lg" href={pdf_file}>预览并下载PDF简历</a>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
