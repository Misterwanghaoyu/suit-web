import { verifyAccessToken } from './jwt';
import { getAccessTokenCookie } from './token-storage';
import { Permission, hasPermission, hasAnyPermission, hasAllPermissions } from './rbac';
import { Role } from './rbac';

export interface AuthContext {
  userId: string;
  email: string;
  role: Role;
  permissions: Permission[];
}

export async function getAuthContext(): Promise<AuthContext | null> {
  const accessToken = await getAccessTokenCookie();
  
  if (!accessToken) {
    return null;
  }
  
  const payload = verifyAccessToken(accessToken);
  
  if (!payload) {
    return null;
  }
  
  return {
    userId: payload.userId,
    email: payload.email,
    role: payload.role as Role,
    permissions: payload.permissions as Permission[],
  };
}

export async function requireAuth(): Promise<AuthContext> {
  const context = await getAuthContext();
  
  if (!context) {
    throw new Error('Unauthorized');
  }
  
  return context;
}

export async function requirePermission(permission: Permission): Promise<AuthContext> {
  const context = await requireAuth();
  
  if (!hasPermission(context.role, permission)) {
    throw new Error(`Missing required permission: ${permission}`);
  }
  
  return context;
}

export async function requireAnyPermission(permissions: Permission[]): Promise<AuthContext> {
  const context = await requireAuth();
  
  if (!hasAnyPermission(context.role, permissions)) {
    throw new Error(`Missing required permissions`);
  }
  
  return context;
}

export async function requireAllPermissions(permissions: Permission[]): Promise<AuthContext> {
  const context = await requireAuth();
  
  if (!hasAllPermissions(context.role, permissions)) {
    throw new Error(`Missing required permissions`);
  }
  
  return context;
}

export async function checkPermission(permission: Permission): Promise<boolean> {
  const context = await getAuthContext();
  
  if (!context) {
    return false;
  }
  
  return hasPermission(context.role, permission);
}

export async function checkAnyPermission(permissions: Permission[]): Promise<boolean> {
  const context = await getAuthContext();
  
  if (!context) {
    return false;
  }
  
  return hasAnyPermission(context.role, permissions);
}

export async function checkAllPermissions(permissions: Permission[]): Promise<boolean> {
  const context = await getAuthContext();
  
  if (!context) {
    return false;
  }
  
  return hasAllPermissions(context.role, permissions);
}
