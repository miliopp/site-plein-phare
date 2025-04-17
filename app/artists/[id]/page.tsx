import { notFound } from 'next/navigation';
import artists from '../../data/artists.json';
import ArtistDetail from './ArtistDetail';

export default async function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((a) => a.id === params.id);
  if (!artist) notFound();

  return <ArtistDetail artist={artist} />;
}