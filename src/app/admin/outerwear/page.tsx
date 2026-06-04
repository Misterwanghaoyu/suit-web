import { getOuterwearAction } from '@/actions/admin/outerwear';
import OuterwearClient from './outerwear-client';

export default async function OuterwearPage() {
  const result = await getOuterwearAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">外套管理</h1>
      <OuterwearClient initialData={result.success ? result.data || [] : []} />
    </div>
  );
}
