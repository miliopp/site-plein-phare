'use client';

import Image from 'next/image';
import styles from './artist.module.css';
import Layout from '../../components/Layout';
import Embed from './Embed';


export default function ArtistDetail({ artist }: { artist: any }) {
  const socialIcons: { [key: string]: string } = {
    instagram: '/icons/instagram.svg',
    facebook: '/icons/facebook.svg',
    soundcloud: '/icons/soundcloud.svg',
    spotify: '/icons/spotify.svg',
    beatport: '/icons/beatport.svg',
    youtube: '/icons/youtube.svg',
    tiktok: '/icons/tiktok.svg',
    applemusic: '/icons/applemusic.svg',
    bandcamp: '/icons/bandcamp.svg',
    residentadvisor: '/icons/residentadvisor.svg'
  };

  const bioLines = typeof artist.bio === 'string' ? artist.bio.split('\n') : [];
  

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
          {/* Gestion des sauts de ligne sans innerHTML */}
          <div className={styles.bioBlock}>
          {typeof artist.bio === 'string' &&
            artist.bio.split('\n').map((line: string, i: number) => (
              <p key={i}>{line}</p>
          ))}
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
          {artist.youtubeEmbed && <Embed html={artist.youtubeEmbed} />}
          {artist.spotifyEmbed && <Embed html={artist.spotifyEmbed} />}
          {artist.soundcloudEmbed && <Embed html={artist.soundcloudEmbed} />}
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
