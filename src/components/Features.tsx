import React from 'react';
import { Scissors, Grid3X3, Shirt, Headphones } from 'lucide-react';
import { getFeatures } from '@/lib/data';

const iconMap: Record<string, any> = {
  Scissors,
  Grid3X3,
  Shirt,
  Headphones,
};

const FeatureItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  const Icon = iconMap[icon];
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="mb-6 text-zinc-400">
        <Icon size={32} strokeWidth={1} />
      </div>
      <h3 className="text-white text-sm tracking-widest mb-2 font-light">{title}</h3>
      <p className="text-zinc-500 text-[10px] tracking-wider leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = getFeatures();

  return (
    <section className="bg-zinc-950 py-20 px-10 md:px-24 border-t border-zinc-900">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-x divide-zinc-900">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
