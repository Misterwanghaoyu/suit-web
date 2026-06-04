'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getInspirations, Inspiration } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getInspirationsAction(requireAuth = false): Promise<ApiResponse<Inspiration[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const inspirations = getInspirations();
    return successResponse(inspirations);
  } catch (error) {
    return errorResponse('Failed to fetch inspirations');
  }
}

export async function updateInspirationsAction(data: Inspiration[]): Promise<ApiResponse<Inspiration[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'inspirations.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Inspirations updated successfully');
  } catch (error) {
    return errorResponse('Failed to update inspirations');
  }
}

export async function addInspirationAction(inspiration: Inspiration): Promise<ApiResponse<Inspiration>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const inspirations = getInspirations();
    const newId = Math.max(...inspirations.map(i => i.id), 0) + 1;
    const newInspiration = { ...inspiration, id: newId };
    
    const updatedInspirations = [...inspirations, newInspiration];
    const filePath = path.join(DATA_DIR, 'inspirations.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedInspirations, null, 2));
    
    return successResponse(newInspiration, 'Inspiration added successfully');
  } catch (error) {
    return errorResponse('Failed to add inspiration');
  }
}

export async function deleteInspirationAction(id: number): Promise<ApiResponse> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const inspirations = getInspirations();
    const updatedInspirations = inspirations.filter(i => i.id !== id);
    
    const filePath = path.join(DATA_DIR, 'inspirations.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedInspirations, null, 2));
    
    return successResponse(null, 'Inspiration deleted successfully');
  } catch (error) {
    return errorResponse('Failed to delete inspiration');
  }
}
