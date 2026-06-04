'use client';

import React, { useState } from 'react';
import DataTable from '@/components/admin/DataTable';
import Dialog from '@/components/admin/Dialog';
import Button from '@/components/admin/Button';
import Input from '@/components/admin/Input';
import { addInspirationAction, updateInspirationsAction, deleteInspirationAction } from '@/actions/admin/inspirations';
import { Inspiration } from '@/lib/data';

interface InspirationsClientProps {
  initialData: Inspiration[];
}

export default function InspirationsClient({ initialData }: InspirationsClientProps) {
  const [data, setData] = useState<Inspiration[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Inspiration | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
  });

  const handleCreate = () => {
    setEditingItem(null);
    setFormData({ title: '', subtitle: '', description: '', image: '' });
    setIsDialogOpen(true);
  };

  const handleEdit = (item: Inspiration) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: item.image,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (item: Inspiration) => {
    if (confirm(`确定要删除灵感 ${item.title} 吗？`)) {
      const result = await deleteInspirationAction(item.id);
      if (result.success) {
        setData(data.filter((i) => i.id !== item.id));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: Inspiration = {
      id: editingItem?.id || 0,
      title: formData.title,
      subtitle: formData.subtitle,
      description: formData.description,
      image: formData.image,
      items: [],
    };

    if (editingItem) {
      const updatedData = data.map((item) => (item.id === editingItem.id ? newItem : item));
      const result = await updateInspirationsAction(updatedData);
      if (result.success) {
        setData(updatedData);
      }
    } else {
      const result = await addInspirationAction(newItem);
      if (result.success && result.data) {
        setData([...data, result.data]);
      }
    }
    
    setIsDialogOpen(false);
  };

  const columns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'title' as const, header: '标题' },
    { key: 'subtitle' as const, header: '副标题' },
  ];

  return (
    <div>
      <div className="mb-4">
        <Button onClick={handleCreate}>添加灵感</Button>
      </div>
      <DataTable data={data} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
      
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={editingItem ? '编辑灵感' : '添加灵感'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="标题" type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
          <Input label="副标题" type="text" value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} required />
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-700">描述</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-black focus:border-transparent"
              rows={3}
              required
            />
          </div>
          <Input label="图片URL" type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>取消</Button>
            <Button type="submit">{editingItem ? '更新' : '创建'}</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
