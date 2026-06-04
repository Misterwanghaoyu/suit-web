'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getAccessories, Product } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getAccessoriesAction(requireAuth = false): Promise<ApiResponse<Product[]>> {
  // Authenticate if required (admin operations)
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const accessories = getAccessories();
    return successResponse(accessories);
  } catch (error) {
    return errorResponse('Failed to fetch accessories');
  }
}

export async function updateAccessoriesAction(data: Product[]): Promise<ApiResponse<Product[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'accessories.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Accessories updated successfully');
  } catch (error) {
    return errorResponse('Failed to update accessories');
  }
}

export async function addAccessoryAction(accessory: Product): Promise<ApiResponse<Product>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const accessories = getAccessories();
    const newId = Math.max(...accessories.map(a => a.id), 0) + 1;
    const newAccessory = { ...accessory, id: newId };
    
    const updatedAccessories = [...accessories, newAccessory];
    const filePath = path.join(DATA_DIR, 'accessories.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedAccessories, null, 2));
    
    return successResponse(newAccessory, 'Accessory added successfully');
  } catch (error) {
    return errorResponse('Failed to add accessory');
  }
}

export async function deleteAccessoryAction(id: number): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const accessories = getAccessories();
    const updatedAccessories = accessories.filter(a => a.id !== id);
    
    const filePath = path.join(DATA_DIR, 'accessories.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedAccessories, null, 2));
    
    return successResponse(null, 'Accessory deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete accessory');
  }
}
