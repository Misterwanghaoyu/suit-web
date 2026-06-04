'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getOuterwear, Product } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getOuterwearAction(requireAuth = false): Promise<ApiResponse<Product[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const outerwear = getOuterwear();
    return successResponse(outerwear);
  } catch (error) {
    return errorResponse('Failed to fetch outerwear');
  }
}

export async function updateOuterwearAction(data: Product[]): Promise<ApiResponse<Product[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'outerwear.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Outerwear updated successfully');
  } catch (error) {
    return errorResponse('Failed to update outerwear');
  }
}

export async function addOuterwearAction(item: Product): Promise<ApiResponse<Product>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const outerwear = getOuterwear();
    const newId = Math.max(...outerwear.map(o => o.id), 0) + 1;
    const newItem = { ...item, id: newId };
    
    const updatedOuterwear = [...outerwear, newItem];
    const filePath = path.join(DATA_DIR, 'outerwear.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedOuterwear, null, 2));
    
    return successResponse(newItem, 'Outerwear added successfully');
  } catch (error) {
    return errorResponse('Failed to add outerwear');
  }
}

export async function deleteOuterwearAction(id: number): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const outerwear = getOuterwear();
    const updatedOuterwear = outerwear.filter(o => o.id !== id);
    
    const filePath = path.join(DATA_DIR, 'outerwear.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedOuterwear, null, 2));
    
    return successResponse(null, 'Outerwear deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete outerwear');
  }
}
