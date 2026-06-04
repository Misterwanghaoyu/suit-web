'use server';

import { authenticateAdmin } from '@/lib/auth';
import { successResponse, errorResponse, unauthorizedResponse, ApiResponse } from '@/lib/response';
import { getCollectionItems, CollectionItem } from '@/lib/data';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getCollectionItemsAction(requireAuth = false): Promise<ApiResponse<CollectionItem[]>> {
  if (requireAuth) {
    const auth = await authenticateAdmin();
    if (!auth.success) {
      return unauthorizedResponse();
    }
  }

  try {
    const items = getCollectionItems();
    return successResponse(items);
  } catch (error) {
    return errorResponse('Failed to fetch collection items');
  }
}

export async function updateCollectionItemsAction(data: CollectionItem[]): Promise<ApiResponse<CollectionItem[]>> {
  const auth = await authenticateAdmin();
  if (!auth.success) {
    return unauthorizedResponse();
  }

  try {
    const filePath = path.join(DATA_DIR, 'collection.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return successResponse(data, 'Collection items updated successfully');
  } catch (error) {
    return errorResponse('Failed to update collection items');
  }
}
