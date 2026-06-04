'use client';

import React from 'react';
import { logoutAction } from '@/actions/admin/auth';

export default function Header() {
  const handleLogout = async () => {
    await logoutAction();
    window.location.href = '/admin/login';
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-900">管理后台</h2>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        退出登录
      </button>
    </header>
  );
}
