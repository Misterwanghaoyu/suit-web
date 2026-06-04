'use server';

import { getUserByEmail, verifyPassword, User } from '@/lib/user';
import { generateTokenPair, generateAccessToken, TokenPayload, verifyAccessToken, verifyRefreshToken } from '@/lib/jwt';
import { setRefreshTokenCookie, setAccessTokenCookie, getRefreshTokenCookie, getAccessTokenCookie, clearAuthCookies, storeRefreshToken, revokeRefreshToken, validateRefreshToken } from '@/lib/token-storage';
import { Role, ROLE_PERMISSIONS } from '@/lib/rbac';
import { successResponse, errorResponse, ApiResponse } from '@/lib/response';

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResult {
  user: Omit<User, 'password'>;
  accessToken: string;
  refreshToken: string;
}

export async function loginAction(input: LoginInput): Promise<ApiResponse<LoginResult>> {
  try {
    const user = getUserByEmail(input.email);
    
    if (!user) {
      return errorResponse('Invalid email or password');
    }
    
    if (!user.isActive) {
      return errorResponse('Account is deactivated');
    }
    
    const isValidPassword = await verifyPassword(input.password, user.password);
    
    if (!isValidPassword) {
      return errorResponse('Invalid email or password');
    }
    
    const permissions = ROLE_PERMISSIONS[user.role as Role] || [];
    
    const tokenPayload: TokenPayload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      permissions,
    };
    
    const tokenPair = generateTokenPair(tokenPayload);
    
    // Store refresh token
    storeRefreshToken(tokenPair.refreshToken, user.id);
    
    // Set cookies
    await setAccessTokenCookie(tokenPair.accessToken);
    await setRefreshTokenCookie(tokenPair.refreshToken);
    
    const { password, ...userWithoutPassword } = user;
    
    return successResponse({
      user: userWithoutPassword,
      accessToken: tokenPair.accessToken,
      refreshToken: tokenPair.refreshToken,
    }, 'Login successful');
  } catch (error) {
    return errorResponse('Login failed');
  }
}

export async function logoutAction(): Promise<ApiResponse> {
  try {
    const refreshToken = await getRefreshTokenCookie();
    
    if (refreshToken) {
      revokeRefreshToken(refreshToken);
    }
    
    await clearAuthCookies();
    
    return successResponse(null, 'Logout successful');
  } catch (error) {
    return errorResponse('Logout failed');
  }
}

export async function refreshTokenAction(): Promise<ApiResponse<{ accessToken: string }>> {
  try {
    const refreshToken = await getRefreshTokenCookie();
    
    if (!refreshToken) {
      return errorResponse('No refresh token found');
    }
    
    const payload = verifyRefreshToken(refreshToken);
    
    if (!payload) {
      await clearAuthCookies();
      return errorResponse('Invalid refresh token');
    }
    
    // Validate refresh token in storage
    const userId = validateRefreshTokenInStorage(refreshToken);
    if (!userId || userId !== payload.userId) {
      await clearAuthCookies();
      return errorResponse('Refresh token expired or invalid');
    }
    
    // Generate new access token
    const newAccessToken = generateAccessToken(payload);
    
    // Set new access token cookie
    await setAccessTokenCookie(newAccessToken);
    
    return successResponse({ accessToken: newAccessToken }, 'Token refreshed successfully');
  } catch (error) {
    return errorResponse('Token refresh failed');
  }
}

function validateRefreshTokenInStorage(token: string): string | null {
  return validateRefreshToken(token);
}

export async function getCurrentUserAction(): Promise<ApiResponse<Omit<User, 'password'> | null>> {
  try {
    const accessToken = await getAccessTokenCookie();
    
    if (!accessToken) {
      return successResponse(null);
    }
    
    const payload = verifyAccessToken(accessToken);
    
    if (!payload) {
      return successResponse(null);
    }
    
    const user = getUserByEmail(payload.email);
    
    if (!user || !user.isActive) {
      return successResponse(null);
    }
    
    const { password, ...userWithoutPassword } = user;
    
    return successResponse(userWithoutPassword);
  } catch (error) {
    return errorResponse('Failed to get current user');
  }
}
