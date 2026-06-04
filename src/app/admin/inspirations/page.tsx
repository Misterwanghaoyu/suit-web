import { getInspirationsAction } from '@/actions/admin/inspirations';
import InspirationsClient from './inspirations-client';

export default async function InspirationsPage() {
  const result = await getInspirationsAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">灵感管理</h1>
      <InspirationsClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
