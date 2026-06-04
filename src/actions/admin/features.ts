'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getFeatures, Feature } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getFeaturesAction(requireAuth = false): Promise<ApiResponse<Feature[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const features = getFeatures();
    return successResponse(features);
  } catch (error) {
    return errorResponse('Failed to fetch features');
  }
}

export async function updateFeaturesAction(data: Feature[]): Promise<ApiResponse<Feature[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'features.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Features updated successfully');
  } catch (error) {
    return errorResponse('Failed to update features');
  }
}
