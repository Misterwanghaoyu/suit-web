'use client';

import React, { useState } from 'react';
import Button from '@/components/admin/Button';
import Input from '@/components/admin/Input';
import { updateAboutDataAction } from '@/actions/admin/about';
import { AboutData } from '@/lib/data';

interface AboutClientProps {
  initialData: AboutData | null;
}

export default function AboutClient({ initialData }: AboutClientProps) {
  const [data, setData] = useState<AboutData | null>(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<AboutData>(
    initialData || {
      hero: { title: '', subtitle: '' },
      story: { year: '', title: '', paragraphs: [] },
      values: [],
      timeline: [],
      quote: { text: '', author: '' },
      contact: { title: '', description: '', buttons: [] },
    }
  );

  const handleEdit = () => {
    setFormData(data || {
      hero: { title: '', subtitle: '' },
      story: { year: '', title: '', paragraphs: [] },
      values: [],
      timeline: [],
      quote: { text: '', author: '' },
      contact: { title: '', description: '', buttons: [] },
    });
    setIsEditing(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await updateAboutDataAction(formData);
    if (result.success && result.data) {
      setData(result.data);
      setIsEditing(false);
    }
  };

  if (!data) {
    return <div className="text-gray-500">暂无数据</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {!isEditing ? (
        <div>
          <div className="mb-4">
            <Button onClick={handleEdit}>编辑</Button>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Hero</h3>
              <p className="text-gray-700">{data.hero.title}</p>
              <p className="text-gray-700">{data.hero.subtitle}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">品牌故事</h3>
              <p className="text-gray-700">{data.story.title}</p>
              {data.story.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">品牌价值观</h3>
              {data.values.map((value, i) => (
                <div key={i} className="text-gray-700">
                  <span className="font-semibold">{value.number}.</span> {value.title}: {value.description}
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">发展历程</h3>
              {data.timeline.map((item, i) => (
                <div key={i} className="text-gray-700">
                  <span className="font-semibold">{item.year}:</span> {item.title} - {item.description}
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">名言</h3>
              <p className="text-gray-700 italic">"{data.quote.text}" - {data.quote.author}</p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Hero</h4>
            <Input label="标题" type="text" value={formData.hero.title} onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, title: e.target.value } })} required />
            <Input label="副标题" type="text" value={formData.hero.subtitle} onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, subtitle: e.target.value } })} required />
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">品牌故事</h4>
            <Input label="年份" type="text" value={formData.story.year} onChange={(e) => setFormData({ ...formData, story: { ...formData.story, year: e.target.value } })} required />
            <Input label="标题" type="text" value={formData.story.title} onChange={(e) => setFormData({ ...formData, story: { ...formData.story, title: e.target.value } })} required />
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-gray-700">段落</label>
              <textarea
                value={formData.story.paragraphs.join('\n')}
                onChange={(e) => setFormData({ ...formData, story: { ...formData.story, paragraphs: e.target.value.split('\n') } })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-black focus:border-transparent"
                rows={4}
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="ghost" onClick={() => setIsEditing(false)}>取消</Button>
            <Button type="submit">保存</Button>
          </div>
        </form>
      )}
    </div>
  );
}
