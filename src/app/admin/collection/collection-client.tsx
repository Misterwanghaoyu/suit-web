'use client';

import React, { useState } from 'react';
import DataTable from '@/components/admin/DataTable';
import Dialog from '@/components/admin/Dialog';
import Button from '@/components/admin/Button';
import Input from '@/components/admin/Input';
import { updateCollectionItemsAction } from '@/actions/admin/collection';
import { CollectionItem } from '@/lib/data';

interface CollectionClientProps {
  initialData: CollectionItem[];
}

export default function CollectionClient({ initialData }: CollectionClientProps) {
  const [data, setData] = useState<CollectionItem[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '',
  });

  const handleEdit = (item: CollectionItem, index: number) => {
    setEditingIndex(index);
    setFormData({
      title: item.title,
      subtitle: item.subtitle,
      image: item.image,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingIndex !== null) {
      const updatedData = [...data];
      updatedData[editingIndex] = { ...formData };
      const result = await updateCollectionItemsAction(updatedData);
      if (result.success) {
        setData(updatedData);
      }
    }
    
    setIsDialogOpen(false);
  };

  const columns = [
    { key: 'title' as const, header: '标题' },
    { key: 'subtitle' as const, header: '副标题' },
  ];

  return (
    <div>
      <DataTable 
        data={data.map((item, index) => ({ ...item, index }))} 
        columns={columns} 
        onEdit={(item: any) => handleEdit(item, item.index)} 
      />
      
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title="编辑系列">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="标题" type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
          <Input label="副标题" type="text" value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} required />
          <Input label="图片URL" type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>取消</Button>
            <Button type="submit">更新</Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
