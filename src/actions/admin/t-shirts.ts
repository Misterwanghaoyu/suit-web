'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getTShirts, Product } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getTShirtsAction(requireAuth = false): Promise<ApiResponse<Product[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const tshirts = getTShirts();
    return successResponse(tshirts);
  } catch (error) {
    return errorResponse('Failed to fetch t-shirts');
  }
}

export async function updateTShirtsAction(data: Product[]): Promise<ApiResponse<Product[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 't-shirts.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'T-shirts updated successfully');
  } catch (error) {
    return errorResponse('Failed to update t-shirts');
  }
}

export async function addTShirtAction(tshirt: Product): Promise<ApiResponse<Product>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const tshirts = getTShirts();
    const newId = Math.max(...tshirts.map(t => t.id), 0) + 1;
    const newTShirt = { ...tshirt, id: newId };
    
    const updatedTShirts = [...tshirts, newTShirt];
    const filePath = path.join(DATA_DIR, 't-shirts.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedTShirts, null, 2));
    
    return successResponse(newTShirt, 'T-shirt added successfully');
  } catch (error) {
    return errorResponse('Failed to add t-shirt');
  }
}

export async function deleteTShirtAction(id: number): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const tshirts = getTShirts();
    const updatedTShirts = tshirts.filter(t => t.id !== id);
    
    const filePath = path.join(DATA_DIR, 't-shirts.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedTShirts, null, 2));
    
    return successResponse(null, 'T-shirt deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete t-shirt');
  }
}
