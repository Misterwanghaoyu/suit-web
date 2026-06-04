'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getSuits, Product } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getSuitsAction(requireAuth = false): Promise<ApiResponse<Product[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const suits = getSuits();
    return successResponse(suits);
  } catch (error) {
    return errorResponse('Failed to fetch suits');
  }
}

export async function updateSuitsAction(data: Product[]): Promise<ApiResponse<Product[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'suits.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Suits updated successfully');
  } catch (error) {
    return errorResponse('Failed to update suits');
  }
}

export async function addSuitAction(suit: Product): Promise<ApiResponse<Product>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const suits = getSuits();
    const newId = Math.max(...suits.map(s => s.id), 0) + 1;
    const newSuit = { ...suit, id: newId };
    
    const updatedSuits = [...suits, newSuit];
    const filePath = path.join(DATA_DIR, 'suits.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedSuits, null, 2));
    
    return successResponse(newSuit, 'Suit added successfully');
  } catch (error) {
    return errorResponse('Failed to add suit');
  }
}

export async function deleteSuitAction(id: number): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const suits = getSuits();
    const updatedSuits = suits.filter(s => s.id !== id);
    
    const filePath = path.join(DATA_DIR, 'suits.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedSuits, null, 2));
    
    return successResponse(null, 'Suit deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete suit');
  }
}
