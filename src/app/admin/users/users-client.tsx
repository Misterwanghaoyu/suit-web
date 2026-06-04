'use client';

import React, { useState } from 'react';
import DataTable from '@/components/admin/DataTable';
import Dialog from '@/components/admin/Dialog';
import Button from '@/components/admin/Button';
import Input from '@/components/admin/Input';
import { createUserAction, updateUserAction, deleteUserAction } from '@/actions/admin/users';
import { OmitUser, User } from '@/lib/user';

interface UsersClientProps {
  initialData: OmitUser[];
}

export default function UsersClient({ initialData }: UsersClientProps) {
  const [data, setData] = useState<OmitUser[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<OmitUser | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    role: 'viewer',
    password: '',
  });

  const handleCreate = () => {
    setEditingUser(null);
    setFormData({ email: '', name: '', role: 'viewer', password: '' });
    setIsDialogOpen(true);
  };

  const handleEdit = (user: OmitUser) => {
    setEditingUser(user);
    setFormData({ email: user.email, name: user.name, role: user.role, password: '' });
    setIsDialogOpen(true);
  };

  const handleDelete = async (user: OmitUser) => {
    if (confirm(`确定要删除用户 ${user.name} 吗？`)) {
      const result = await deleteUserAction(user.id);
      if (result.success) {
        setData(data.filter((u) => u.id !== user.id));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingUser) {
      const result = await updateUserAction(editingUser.id, {
        name: formData.name,
        role: formData.role,
      });
      if (result.success && result.data) {
        setData(data.map((u) => (u.id === editingUser.id ? result.data! : u)));
      }
    } else {
      const result = await createUserAction({
        email: formData.email,
        name: formData.name,
        role: formData.role,
        password: formData.password,
      });
      if (result.success && result.data) {
        setData([...data, result.data]);
      }
    }
    
    setIsDialogOpen(false);
  };

  const columns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'email' as const, header: '邮箱' },
    { key: 'name' as const, header: '姓名' },
    { key: 'role' as const, header: '角色' },
    { key: 'isActive' as const, header: '状态', render: (value: boolean) => (value ? '启用' : '禁用') },
  ];

  return (
    <div>
      <div className="mb-4">
        <Button onClick={handleCreate}>添加用户</Button>
      </div>
      <DataTable data={data} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
      
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={editingUser ? '编辑用户' : '添加用户'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="邮箱"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={!!editingUser}
          />
          <Input
            label="姓名"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">角色</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-black focus:border-transparent"
              required
            >
              <option value="super_admin">超级管理员</option>
              <option value="admin">管理员</option>
              <option value="editor">编辑</option>
              <option value="viewer">查看者</option>
            </select>
          </div>
          {!editingUser && (
            <Input
              label="密码"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          )}
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>取消</Button>
            <Button type="submit">{editingUser ? '更新' : '创建'}</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
