'use client';

import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './InstagramSlider.module.css';

export default function InstagramSlider() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1.2,
          spacing: 10,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    // Autoplay every 5s
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

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
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            ) : (
              <img src={post.media_url} alt={post.caption} />
            )}
            <div className={styles.meta}>
              <span>{formatDate(post.timestamp)}</span>
              <span>❤️ {post.like_count || 0} 💬 {post.comments_count || 0}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button onClick={() => instanceRef.current?.prev()} className={styles.arrow}>◀</button>
        <button onClick={() => instanceRef.current?.next()} className={styles.arrow}>▶</button>
      </div>
    </div>
  );
}