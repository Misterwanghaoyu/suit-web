import React from 'react';
import { Scissors, Grid3X3, Shirt, Headphones } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center px-6">
    <div className="mb-6 text-zinc-400">
      <Icon size={32} strokeWidth={1} />
    </div>
    <h3 className="text-white text-sm tracking-widest mb-2 font-light">{title}</h3>
    <p className="text-zinc-500 text-[10px] tracking-wider leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Scissors,
      title: "精湛工艺",
      description: "匠心剪裁，细节成就品质"
    },
    {
      icon: Grid3X3,
      title: "优质面料",
      description: "精选全球面料，舒适与质感兼具"
    },
    {
      icon: Shirt,
      title: "合体版型",
      description: "贴合亚洲身形，修饰身形比例"
    },
    {
      icon: Headphones,
      title: "贴心服务",
      description: "专业顾问在线，售后无忧"
    }
  ];

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
