import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">仪表盘</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="总用户数" value="0" icon="👥" />
        <DashboardCard title="配饰数量" value="0" icon="👜" />
        <DashboardCard title="西装数量" value="0" icon="👔" />
        <DashboardCard title="衬衫数量" value="0" icon="👕" />
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}
