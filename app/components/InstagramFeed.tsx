'use client';

import { useEffect, useState } from 'react';
import styles from './InstagramFeed.module.css';

export default function InstagramFeed() {
  const [posts, setPosts] = useState<any[]>([]);

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
    <div className={styles.grid}>
      {posts.slice(0, 12).map((post) => (
        <div
          key={post.id}
          className={styles.card}
          onClick={() => window.open(post.permalink, '_blank')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && window.open(post.permalink, '_blank')}
        >
          {post.media_type === 'VIDEO' ? (
            <video
              src={post.media_url}
              className={styles.image}
              muted
              playsInline
              loop
              preload="metadata"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
            />
          ) : (
            <img
              src={post.media_url}
              alt={post.caption || 'Instagram post'}
              className={styles.image}
            />
          )}

          <div className={styles.overlay}>
            ❤️ {post.like_count || 0} 💬 {post.comments_count || 0}
          </div>

          <div className={styles.date}>
            {formatDate(post.timestamp)}
          </div>

          <div className={styles.actions}>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">❤️ Liker</a>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">💬 Commenter</a>
          </div>
        </div>
      ))}
    </div>
  );
}