import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logoContainer}>
		<Link href="/">
          <Image
            src="/logo-pleinphare.png"
            alt="Plein Phare Records"
            width={150}
            height={50}
            className={styles.logo}
          />
		</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/events">Events</Link>
          <Link href="/artists">Artists</Link>
          <Link href="/releases">Releases</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shop">Shop</Link>
        </nav>
      </div>

      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/plein.phare/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
        </a>
        <a href="https://www.facebook.com/pleinphareofficial/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
        <a href="https://www.youtube.com/@pleinphareofficial" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
        </a>
        <a href="https://pleinphare.bandcamp.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/bandcamp.svg" alt="Bandcamp" width={24} height={24} />
        </a>
        <a href="https://soundcloud.com/pleinphare" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/soundcloud.svg" alt="SoundCloud" width={24} height={24} />
        </a>
        <a href="https://www.tiktok.com/@pleinphareofficial" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
        </a>
        <a href="https://open.spotify.com/playlist/6ygo8syeHmD90ibYBtmrtU" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/spotify.svg" alt="Spotify" width={24} height={24} />
        </a>
      </div>
    </header>
  );
}
