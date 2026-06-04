import { cookies } from 'next/headers';

const REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';
const ACCESS_TOKEN_COOKIE_NAME = 'access_token';

export async function setRefreshTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(REFRESH_TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export async function setAccessTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ACCESS_TOKEN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 15, // 15 minutes
    path: '/',
  });
}

export async function getRefreshTokenCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(REFRESH_TOKEN_COOKIE_NAME)?.value;
}

export async function getAccessTokenCookie(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value;
}

export async function clearAuthCookies(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(REFRESH_TOKEN_COOKIE_NAME);
  cookieStore.delete(ACCESS_TOKEN_COOKIE_NAME);
}

// In-memory refresh token store (in production, use Redis or database)
const refreshTokens = new Map<string, { userId: string; expiresAt: number }>();

export function storeRefreshToken(token: string, userId: string): void {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  refreshTokens.set(token, { userId, expiresAt });
}

export function validateRefreshToken(token: string): string | null {
  const tokenData = refreshTokens.get(token);
  if (!tokenData) {
    return null;
  }
  
  if (Date.now() > tokenData.expiresAt) {
    refreshTokens.delete(token);
    return null;
  }
  
  return tokenData.userId;
}

export function revokeRefreshToken(token: string): void {
  refreshTokens.delete(token);
}

export function revokeAllUserTokens(userId: string): void {
  Array.from(refreshTokens.entries()).forEach(([token, data]) => {
    if (data.userId === userId) {
      refreshTokens.delete(token);
    }
  });
}
