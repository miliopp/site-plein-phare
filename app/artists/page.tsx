import Link from 'next/link';
import Image from 'next/image';
import artists from '../data/artists.json';
import styles from './artists.module.css';
import Layout from '../components/Layout';

export default function ArtistsPage() {
  return (
    <Layout title="All our Events" description="Discover all our events">
    <main>
      <h1>Our Artists</h1>
      <div className={styles.grid}>
        {artists.map((artist) => (
          <Link key={artist.id} href={`/artists/${artist.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={artist.photo}
                alt={artist.name}
                fill
                className={styles.image}
              />
            </div>
            <h2 className={styles.name}>{artist.name}</h2>
          </Link>
        ))}
      </div>
    </main>
    </Layout>
  );
}
