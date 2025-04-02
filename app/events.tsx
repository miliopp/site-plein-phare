import { useEffect } from 'react';
import Layout from './components/Layout';
import styles from '../styles/Index.module.css';

export default function Events() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://shotgun.live/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout title="All our Events" description="Discover all our events">
      <h1 className={styles.section}>All Events</h1>
      <iframe
        src="https://shotgun.live/venues/plein-phare?embedded=1&ui=dark&transparentBackground=1&social=1"
        allow="payment"
        style={{
          width: '100%',
          height: '800px',
          maxHeight: 'calc(100vh - 200px)',
          border: 0,
        }}
      ></iframe>
    </Layout>
  );
}