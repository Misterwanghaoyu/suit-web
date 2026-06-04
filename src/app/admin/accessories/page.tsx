import { getAccessoriesAction } from '@/actions/admin/accessories';
import AccessoriesClient from './accessories-client';

export default async function AccessoriesPage() {
  const result = await getAccessoriesAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">配饰管理</h1>
      <AccessoriesClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
