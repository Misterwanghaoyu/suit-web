import { getSuitsAction } from '@/actions/admin/suits';
import SuitsClient from './suits-client';

export default async function SuitsPage() {
  const result = await getSuitsAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">西装管理</h1>
      <SuitsClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
