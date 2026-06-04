import { redirect } from 'next/navigation';
import { getCurrentUserAction } from '@/actions/admin/auth';
import AdminLayout from '@/components/admin/AdminLayout';

export default async function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userResult = await getCurrentUserAction();
  
  if (!userResult.success || !userResult.data) {
    redirect('/login');
  }

  return <AdminLayout>{children}</AdminLayout>;
}
