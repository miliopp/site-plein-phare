import { notFound } from 'next/navigation';
import Image from 'next/image';
import artists from '../../data/artists.json';
import styles from './artist.module.css';
import Layout from '../../components/Layout';

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((a) => a.id === params.id);

  if (!artist) {
    notFound();
  }

  return (
    <Layout title="All our Events" description="Discover all our events">
    <main className={styles.container}>
      <h1>{artist.name}</h1>
      <Image src={artist.photo} alt={artist.name} width={300} height={300} className={styles.photo} />
      <p>{artist.bio}</p>
      <div className={styles.socialLinks}>
        {artist.socialLinks.instagram && (
          <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        )}
        {artist.socialLinks.facebook && (
          <a href={artist.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        )}
        {artist.socialLinks.soundcloud && (
          <a href={artist.socialLinks.soundcloud} target="_blank" rel="noopener noreferrer">
            SoundCloud
          </a>
        )}
      </div>
      <div
        className={styles.soundcloud}
        dangerouslySetInnerHTML={{ __html: artist.soundcloudEmbed }}
      />
      <form className={styles.bookingForm}>
        <h2>Book {artist.name}</h2>
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" required />
        <button type="submit">Envoyer</button>
      </form>
    </main>
    </Layout>
  );
}
