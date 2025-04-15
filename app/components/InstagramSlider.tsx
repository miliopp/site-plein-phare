'use client';

import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './InstagramSlider.module.css';

export default function InstagramSlider() {
  const [posts, setPosts] = useState<any[]>([]);
  const [sliderLoaded, setSliderLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    posts.length > 0
      ? {
          loop: false,
          mode: 'snap',
          slides: {
            origin: 'auto',
            perView: 8,
            spacing: 16,
          },
          breakpoints: {
            '(max-width: 1440px)': { slides: { perView: 6, spacing: 12 } },
            '(max-width: 1024px)': { slides: { perView: 4, spacing: 10 } },
            '(max-width: 768px)': { slides: { perView: 2.5, spacing: 8 } },
            '(max-width: 480px)': { slides: { perView: 1.2, spacing: 6 } },
          },
          created() {
            setSliderLoaded(true);
          },
        }
      : null
  );

  useEffect(() => {
    fetch('/api/refresh-token');
    fetch('/api/instagram-feed')
      .then((res) => res.json())
      .then((data) => setPosts(data || []));
  }, []);

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.wrapper}>
      {sliderLoaded && instanceRef.current && posts.length > 0 && (
        <button onClick={() => instanceRef.current.prev()} className={`${styles.arrow} ${styles.leftArrow}`}>
          ◀
        </button>
      )}

      <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
        {posts.slice(0, 25).map((post) => (
          <div
            key={post.id}
            className={`keen-slider__slide ${styles.slide}`}
            onClick={() => window.open(post.permalink, '_blank')}
          >
            {post.media_type === 'VIDEO' ? (
              <video
                src={post.media_url}
                muted
                playsInline
                loop
                autoPlay
                preload="metadata"
              />
            ) : (
              <img src={post.media_url} alt={post.caption} />
            )}

            <div className={styles.meta}>
              <span className={styles.date}>{formatDate(post.timestamp)}</span>
              <div className={styles.stats}>
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                  2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                  C13.09 3.81 14.76 3 16.5 3
                  19.58 3 22 5.42 22 8.5
                  c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                {post.like_count || 0}
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v20l4-4h14
                  c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                {post.comments_count || 0}
              </div>
            </div>
          </div>
        ))}
      </div>

      {sliderLoaded && instanceRef.current && posts.length > 0 && (
        <button onClick={() => instanceRef.current.next()} className={`${styles.arrow} ${styles.rightArrow}`}>
          ▶
        </button>
      )}

      <a
        href="https://www.instagram.com/plein.phare/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.moreButton}
      >
        Voir plus sur Instagram →
      </a>
    </div>
  );
}
