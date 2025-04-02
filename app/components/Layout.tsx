import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/Index.module.css';

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

// app/layout.tsx
export const metadata = {
  title: 'Plein Phare Records',
  description: 'Official website of Plein Phare Records',
  icons: {
    icon: '/favicon.ico', // ou .png, .svg
  },
};

export default function Layout({ children, title = 'Plein Phare Records', description = 'Official website of Plein Phare Records' }: LayoutProps) {
  return (
	<html>
	<body>
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
  	</body>
	</html>

  );
}
