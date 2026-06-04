'use client';

import React, { useState } from 'react';
import DataTable from '@/components/admin/DataTable';
import Dialog from '@/components/admin/Dialog';
import Button from '@/components/admin/Button';
import Input from '@/components/admin/Input';
import { addOuterwearAction, updateOuterwearAction, deleteOuterwearAction } from '@/actions/admin/outerwear';
import { Product } from '@/lib/data';

interface OuterwearClientProps {
  initialData: Product[];
}

export default function OuterwearClient({ initialData }: OuterwearClientProps) {
  const [data, setData] = useState<Product[]>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleCreate = () => {
    setEditingItem(null);
    setFormData({ name: '', price: '', description: '', image: '', category: '' });
    setIsDialogOpen(true);
  };

  const handleEdit = (item: Product) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      price: String(item.price),
      description: item.description,
      image: item.image,
      category: item.category,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (item: Product) => {
    if (confirm(`确定要删除外套 ${item.name} 吗？`)) {
      const result = await deleteOuterwearAction(item.id);
      if (result.success) {
        setData(data.filter((i) => i.id !== item.id));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: Product = {
      id: editingItem?.id || 0,
      name: formData.name,
      price: formData.price,
      description: formData.description,
      image: formData.image,
      category: formData.category,
    };

    if (editingItem) {
      const updatedData = data.map((item) => (item.id === editingItem.id ? newItem : item));
      const result = await updateOuterwearAction(updatedData);
      if (result.success) {
        setData(updatedData);
      }
    } else {
      const result = await addOuterwearAction(newItem);
      if (result.success && result.data) {
        setData([...data, result.data]);
      }
    }
    
    setIsDialogOpen(false);
  };

  const columns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'name' as const, header: '名称' },
    { key: 'price' as const, header: '价格' },
    { key: 'category' as const, header: '分类' },
  ];

  return (
    <div>
      <div className="mb-4">
        <Button onClick={handleCreate}>添加外套</Button>
      </div>
      <DataTable data={data} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
      
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} title={editingItem ? '编辑外套' : '添加外套'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="名称" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <Input label="价格" type="number" step="0.01" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required />
          <Input label="分类" type="text" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} required />
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
