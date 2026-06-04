import { getTShirtsAction } from '@/actions/admin/t-shirts';
import TShirtsClient from './t-shirts-client';

export default async function TShirtsPage() {
  const result = await getTShirtsAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">T恤管理</h1>
      <TShirtsClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
