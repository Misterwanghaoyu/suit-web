import { getShirtsAction } from '@/actions/admin/shirts';
import ShirtsClient from './shirts-client';

export default async function ShirtsPage() {
  const result = await getShirtsAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">衬衫管理</h1>
      <ShirtsClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
