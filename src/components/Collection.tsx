import React from 'react';
import { ArrowRight, MoveRight } from 'lucide-react';
import { getCollectionItems } from '@/lib/data';

interface CollectionItemProps {
  title: string;
  subtitle: string;
  image: string;
}

const CollectionItem = ({ title, subtitle, image }: CollectionItemProps) => (
  <div className="relative aspect-[3/4] group overflow-hidden cursor-pointer">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
    <div className="absolute bottom-6 left-6 text-white">
      <div className="flex flex-col mb-2">
        <span className="text-lg font-light tracking-widest">{title}</span>
        <span className="text-[10px] tracking-widest opacity-80 uppercase">{subtitle}</span>
      </div>
      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
    </div>
  </div>
);

const Collection = () => {
  const items = getCollectionItems();

  return (
    <section className="py-24 px-10 md:px-24 bg-white">
      <div className="flex justify-between items-end mb-12">
        <div className="flex flex-col">
          <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-2">Collection</span>
          <h2 className="text-2xl font-serif tracking-widest">精选系列</h2>
        </div>
        <button className="flex items-center space-x-2 text-[10px] tracking-widest uppercase hover:opacity-60 transition-opacity">
          <span>查看全部</span>
          <MoveRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <CollectionItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
