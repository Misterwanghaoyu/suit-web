'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getShirts, Product } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getShirtsAction(requireAuth = false): Promise<ApiResponse<Product[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const shirts = getShirts();
    return successResponse(shirts);
  } catch (error) {
    return errorResponse('Failed to fetch shirts');
  }
}

export async function updateShirtsAction(data: Product[]): Promise<ApiResponse<Product[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'shirts.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Shirts updated successfully');
  } catch (error) {
    return errorResponse('Failed to update shirts');
  }
}

export async function addShirtAction(shirt: Product): Promise<ApiResponse<Product>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const shirts = getShirts();
    const newId = Math.max(...shirts.map(s => s.id), 0) + 1;
    const newShirt = { ...shirt, id: newId };
    
    const updatedShirts = [...shirts, newShirt];
    const filePath = path.join(DATA_DIR, 'shirts.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedShirts, null, 2));
    
    return successResponse(newShirt, 'Shirt added successfully');
  } catch (error) {
    return errorResponse('Failed to add shirt');
  }
}

export async function deleteShirtAction(id: number): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const shirts = getShirts();
    const updatedShirts = shirts.filter(s => s.id !== id);
    
    const filePath = path.join(DATA_DIR, 'shirts.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedShirts, null, 2));
    
    return successResponse(null, 'Shirt deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete shirt');
  }
}
