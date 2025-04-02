import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Index.module.css';

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = 'Plein Phare Records', description = 'Official website of Plein Phare Records' }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
		<link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
	  <Footer />
    </div>
  );
}
