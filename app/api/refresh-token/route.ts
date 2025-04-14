import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'instagram-token.json');
  const tokenData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const currentToken = tokenData.access_token;

  const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
  const res = await fetch(refreshUrl);
  const data = await res.json();

  if (!res.ok || !data.access_token) {
    return NextResponse.json({ error: 'Failed to refresh token', details: data }, { status: 500 });
  }

  // Mise à jour du fichier avec le nouveau token
  const updatedToken = {
    access_token: data.access_token,
    expires_in: data.expires_in,
    refreshed_at: new Date().toISOString()
  };

  fs.writeFileSync(filePath, JSON.stringify(updatedToken, null, 2));

  return NextResponse.json({ message: 'Token refreshed', ...updatedToken });
}
