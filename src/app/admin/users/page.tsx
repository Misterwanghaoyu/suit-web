import { getUsersAction } from '@/actions/admin/users';
import UsersClient from './users-client';

export default async function UsersPage() {
  const result = await getUsersAction();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">用户管理</h1>
      <UsersClient initialData={result.success ? result.data : []} />
    </div>
  );
}
