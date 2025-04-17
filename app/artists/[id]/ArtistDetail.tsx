'use client';

import Image from 'next/image';
import styles from './artist.module.css';
import Layout from '../../components/Layout';

export default function ArtistDetail({ artist }: { artist: any }) {
  const socialIcons: { [key: string]: string } = {
    instagram: '/icons/instagram.svg',
    facebook: '/icons/facebook.svg',
    soundcloud: '/icons/soundcloud.svg',
    spotify: '/icons/spotify.svg',
    beatport: '/icons/beatport.svg',
    youtube: '/icons/youtube.svg',
    applemusic: '/icons/applemusic.svg',
    tiktok: '/icons/tiktok.svg',
    bandcamp: '/icons/bandcamp.svg',
    residentadvisor: '/icons/residentadvisor.svg'
  };

  return (
    <Layout title={artist.name} description={`Booking & info for ${artist.name}`}>
    <main className={styles.container}>
      <section className={styles.topSection}>
        <Image
          src={artist.photo}
          alt={artist.name}
          width={300}
          height={300}
          className={styles.photo}
        />

        <div className={styles.bioAndSocials}>
          <h1>{artist.name}</h1>
          <div className={styles.bioBlock}>
            <p>{artist.bio}</p>
          </div>

          <div className={styles.socialLinks}>
            {Object.entries(artist.socialLinks).map(([platform, url]) =>
              platform !== 'spotify' && platform !== 'soundcloud' && url ? (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                  <img src={socialIcons[platform]} alt={platform} />
                  {platform}
                </a>
              ) : null
            )}
          </div>
        </div>

        <div className={styles.embeds}>
          {artist.spotifyEmbed && (
            <div className={styles.embed} dangerouslySetInnerHTML={{ __html: artist.spotifyEmbed }} />
          )}
          {artist.soundcloudEmbed && (
            <div className={styles.embed} dangerouslySetInnerHTML={{ __html: artist.soundcloudEmbed }} />
          )}
          {artist.youtubeEmbed && (
            <div className={styles.embed} dangerouslySetInnerHTML={{ __html: artist.youtubeEmbed }} />
          )}
        </div>
      </section>

      <form className={styles.bookingForm}>
          <h2>Book {artist.name}</h2>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="email" required />
          <input type="text" name="date" placeholder="Date" />
          <input type="text" name="lieu" placeholder="Venue" />
          <input type="text" name="offre" placeholder="Offer" />
          <textarea name="message" placeholder="Your message" required />
          <button type="submit">Send</button>
        </form>
    </main>
    </Layout>
  );
}
