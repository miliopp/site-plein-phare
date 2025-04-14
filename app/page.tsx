'use client';

import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import styles from '../styles/Index.module.css';
import ShotgunWidget from './components/ShotgunWidget';
import InstagramSlider from './components/InstagramSlider';

export default function Home() {

  return (
    <Layout>
      <section className={styles.hero}>
        <p className={styles.title}>
          ARTISTS / CREW / EVENTS / LABEL SINCE 2013 <br />
          TOULOUSE (FR)
        </p>
      </section>

      <section className={styles.section}>
        <h1>Next Events</h1>
        <section id="shotgun-events-listing" className={styles.nextEvents}></section>
        <ShotgunWidget />
      </section>

      <section className={styles.section}>
        <h2>Latest News</h2>
        <div className={styles.instagramFeed}>
        <InstagramSlider />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Latest Releases</h2>
        <a
          href="https://pleinphare.bandcamp.com/music"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Explore our catalog
        </a>
      </section>

      <section className={styles.section}>
        <h2>News</h2>
        <a
          href="https://www.instagram.com/plein.phare/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Follow us on Instagram
        </a>
      </section>

      <section className={styles.section}>
        <h2>Contact & Demos</h2>
        <p>Send us your demos and get in touch.</p>
      </section>

      <section className={styles.section}>
        <h2>Merch Shop</h2>
        <a
          href="https://www.diggersfactory.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Shop Now
        </a>
      </section>

      <section className={styles.section}>
        <h2>TECHNO CADENCE Playlist</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/6ygo8syeHmD90ibYBtmrtU"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
        <p>Want to be featured? Submit your track here.</p>
      </section>
    </Layout>
  );
}