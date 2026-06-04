import { getCollectionItemsAction } from '@/actions/admin/collection';
import CollectionClient from './collection-client';

export default async function CollectionPage() {
  const result = await getCollectionItemsAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">系列管理</h1>
      <CollectionClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
