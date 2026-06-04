import { requireAuth, requirePermission } from './permission';
import { Permission } from './rbac';

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export async function authenticateAdmin(): Promise<AuthResult> {
  try {
    const context = await requirePermission(Permission.CONTENT_READ);
    
    return {
      success: true,
      user: {
        id: context.userId,
        email: context.email,
        role: context.role,
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed'
    };
  }
}

export async function authenticate(): Promise<AuthResult> {
  try {
    const context = await requireAuth();
    
    return {
      success: true,
      user: {
        id: context.userId,
        email: context.email,
        role: context.role,
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Authentication failed'
    };
  }
}
