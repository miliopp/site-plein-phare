import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'instagram-token.json');
  const tokenData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const token = tokenData.access_token;

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp,like_count,comments_count&access_token=${token}`;
  const res = await fetch(url);

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch feed' }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data.data);
}