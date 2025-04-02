'use client';

import { useEffect } from 'react';
import styles from '../../styles/Index.module.css';

export default function ShotgunWidget() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__shotgun = {
        'events-listing': {
          organizerId: 193943,
          layout: 'shotgun',
          showEventTags: true,
          showEventState: true,
        },
      };

      if (!document.querySelector('script[src="https://widgets.shotgun.live/events-listing.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://widgets.shotgun.live/events-listing.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <>
      <style>{`
        #shotgun-events-listing {
          --shotgun-muted: #f4f4f5;
          --shotgun-accent: #f4f4f5;
          --shotgun-accent-foreground: #ff765f;
          --shotgun-border: #e4e4e7;
          --shotgun-foreground: #09090b;
        }
      `}</style>

      <section id="shotgun-events-listing" className={styles.nextEvents}/>
    </>
  );
}