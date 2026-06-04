import { getAboutDataAction } from '@/actions/admin/about';
import AboutClient from './about-client';

export default async function AboutPage() {
  const result = await getAboutDataAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">关于页面管理</h1>
      <AboutClient initialData={result.success ? result.data || null : null} />
    </div>
  );
}
