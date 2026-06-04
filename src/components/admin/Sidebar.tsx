'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/admin/dashboard', label: '仪表盘', icon: '📊' },
  { href: '/admin/users', label: '用户管理', icon: '👥' },
  { href: '/admin/accessories', label: '配饰管理', icon: '👜' },
  { href: '/admin/suits', label: '西装管理', icon: '👔' },
  { href: '/admin/shirts', label: '衬衫管理', icon: '👕' },
  { href: '/admin/t-shirts', label: 'T恤管理', icon: '👕' },
  { href: '/admin/outerwear', label: '外套管理', icon: '🧥' },
  { href: '/admin/inspirations', label: '灵感管理', icon: '💡' },
  { href: '/admin/about', label: '关于页面', icon: 'ℹ️' },
  { href: '/admin/collection', label: '系列管理', icon: '📦' },
  { href: '/admin/features', label: '特性管理', icon: '⚡' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-luxury-black text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-serif tracking-widest uppercase">Suitelite</h1>
        <p className="text-xs text-gray-400 tracking-widest uppercase mt-1">管理后台</p>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-luxury-gray text-white'
                  : 'text-gray-300 hover:bg-luxury-gray hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
