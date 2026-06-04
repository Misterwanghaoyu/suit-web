'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getAboutData, AboutData } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getAboutDataAction(requireAuth = false): Promise<ApiResponse<AboutData>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const data = getAboutData();
    return successResponse(data);
  } catch (error) {
    return errorResponse('Failed to fetch about data');
  }
}

export async function updateAboutDataAction(data: AboutData): Promise<ApiResponse<AboutData>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'about.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'About data updated successfully');
  } catch (error) {
    return errorResponse('Failed to update about data');
  }
}
