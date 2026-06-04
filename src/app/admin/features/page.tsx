import { getFeaturesAction } from '@/actions/admin/features';
import FeaturesClient from './features-client';

export default async function FeaturesPage() {
  const result = await getFeaturesAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">特性管理</h1>
      <FeaturesClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
