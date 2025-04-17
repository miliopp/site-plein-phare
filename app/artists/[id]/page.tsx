import { notFound } from 'next/navigation';
import artists from '../../data/artists.json';
import ArtistDetail from './ArtistDetail';

export default async function ArtistPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const artist = artists.find((a) => a.id === id);
  if (!artist) notFound();

  return <ArtistDetail artist={artist} />;
}