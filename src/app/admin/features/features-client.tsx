'use client';

import React, { useState } from 'react';
import DataTable from '@/components/admin/DataTable';
import Dialog from '@/components/admin/Dialog';
import Button from '@/components/admin/Button';
import Input from '@/components/admin/Input';
import { updateFeaturesAction } from '@/actions/admin/features';
import { Feature } from '@/lib/data';

interface FeaturesClientProps {
  initialData: Feature[];
}

export default function FeaturesClient({ initialData }: FeaturesClientProps) {
  const [data, setData] = useState<Feature[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
  });

  const handleEdit = (item: Feature, index: number) => {
    setEditingIndex(index);
    setFormData({
      title: item.title,
      description: item.description,
      icon: item.icon,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingIndex !== null) {
      const updatedData = [...data];
      updatedData[editingIndex] = { ...formData };
      const result = await updateFeaturesAction(updatedData);
      if (result.success) {
        setData(updatedData);
      }
    }
    
    setIsDialogOpen(false);
  };

  const columns = [
    { key: 'title' as const, header: '标题' },
    { key: 'icon' as const, header: '图标' },
  ];

  return (
    <div>
      <DataTable 
        data={data.map((item, index) => ({ ...item, index }))} 
        columns={columns} 
        onEdit={(item: any) => handleEdit(item, item.index)} 
      />
      
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="编辑特性">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="标题" type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
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
          <Input label="图标名称" type="text" value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} required />
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>取消</Button>
            <Button type="submit">更新</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
