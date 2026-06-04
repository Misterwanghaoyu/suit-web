'use server';

import { createUser, getAllUsers, getUserById, updateUser, deleteUser, CreateUserInput, UpdateUserInput } from '@/lib/user';
import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';

export async function getUsersAction(): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const users = getAllUsers();
    return successResponse(users);
  } catch (error) {
    return errorResponse('Failed to fetch users');
  }
}

export async function getUserByIdAction(id: string): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const user = getUserById(id);
    if (!user) {
      return errorResponse('User not found');
    }
    
    const { password, ...userWithoutPassword } = user;
    return successResponse(userWithoutPassword);
  } catch (error) {
    return errorResponse('Failed to fetch user');
  }
}

export async function createUserAction(input: CreateUserInput): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const user = await createUser(input);
    const { password, ...userWithoutPassword } = user;
    return successResponse(userWithoutPassword, 'User created successfully');
  } catch (error) {
    return errorResponse(error instanceof Error ? error.message : 'Failed to create user');
  }
}

export async function updateUserAction(id: string, input: UpdateUserInput): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const user = updateUser(id, input);
    if (!user) {
      return errorResponse('User not found');
    }
    
    const { password, ...userWithoutPassword } = user;
    return successResponse(userWithoutPassword, 'User updated successfully');
  } catch (error) {
    return errorResponse('Failed to update user');
  }
}

export async function deleteUserAction(id: string): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const success = deleteUser(id);
    if (!success) {
      return errorResponse('User not found');
    }
    
    return successResponse(null, 'User deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete user');
  }
}
