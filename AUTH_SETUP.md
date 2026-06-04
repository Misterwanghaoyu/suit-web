# Authentication & RBAC Setup

This document describes the dual-token authentication system and RBAC permission model implemented for the backend management system.

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
JWT_SECRET=your-secret-key-change-in-production
JWT_REFRESH_SECRET=your-refresh-secret-key-change-in-production
```

## Architecture Overview

### Dual-Token Authentication

The system uses JWT-based authentication with two types of tokens:

1. **Access Token**: Short-lived token (15 minutes) used for API requests
2. **Refresh Token**: Long-lived token (7 days) used to obtain new access tokens

### Token Flow

1. **Login**: User provides credentials → Server validates → Returns access + refresh tokens
2. **API Request**: Client sends access token → Server validates → Processes request
3. **Token Refresh**: Client sends refresh token → Server validates → Returns new access token
4. **Logout**: Client sends logout request → Server revokes refresh token → Clears cookies

### RBAC Model

The system implements Role-Based Access Control with the following roles:

- **super_admin**: Full access to all resources
- **admin**: Most permissions, except user deletion and settings modification
- **editor**: Content and product creation/update
- **viewer**: Read-only access

## File Structure

```
src/
├── lib/
│   ├── jwt.ts              # JWT token generation and verification
│   ├── rbac.ts             # RBAC permission model
│   ├── token-storage.ts    # Token storage and validation
│   ├── user.ts             # User data management
│   ├── permission.ts       # Permission checking utilities
│   └── auth.ts             # Authentication helpers
├── actions/
│   ├── auth.ts             # Login, logout, token refresh actions
│   └── users.ts            # User management actions
└── constant/
    └── navigation.ts       # Navigation links
```

## Usage Examples

### Login

```typescript
import { loginAction } from '@/actions/auth';

const result = await loginAction({
  email: 'admin@suitelite.com',
  password: 'password123'
});
```

### Permission Checking

```typescript
import { requirePermission, Permission } from '@/lib/permission';

// Require specific permission
const context = requirePermission(Permission.USER_CREATE);

// Check permission (non-throwing)
if (checkPermission(Permission.CONTENT_UPDATE)) {
  // User has permission
}
```

### User Management

```typescript
import { createUser, getAllUsers } from '@/lib/user';

// Create user
const user = await createUser({
  email: 'user@example.com',
  password: 'password123',
  name: 'John Doe',
  role: 'editor'
});

// Get all users (without passwords)
const users = getAllUsers();
```

## Security Considerations

1. **Token Storage**: Refresh tokens are stored in-memory (Map). In production, use Redis or a database.
2. **Password Hashing**: Uses bcryptjs with 10 salt rounds.
3. **Cookie Security**: Cookies are HTTP-only, secure (in production), and use SameSite=lax.
4. **Token Expiry**: Access tokens expire in 15 minutes, refresh tokens in 7 days.
5. **Token Revocation**: Refresh tokens can be revoked individually or for all user sessions.

## Default User

A default admin user is created in `data/users.json`:
- Email: `admin@suitelite.com`
- Password: Needs to be set (hash the password and update the file)
- Role: `super_admin`

## Next Steps

1. Set up environment variables
2. Hash a password for the default admin user
3. Update `data/users.json` with the hashed password
4. Test the login flow
5. Implement admin UI pages
