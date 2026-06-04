import Link from 'next/link';
import { getSuits } from '@/lib/data';

// Static data structure (preserved for reference)
/*
const suits = [
  {
    id: 1,
    name: 'Classic Wool Blend',
    price: '¥12,800',
    description: '意大利进口羊毛混纺，经典剪裁',
    image: '/images/suit-1.jpg',
    category: 'Business'
  },
  {
    id: 2,
    name: 'Slim Fit Charcoal',
    price: '¥15,600',
    description: '修身剪裁，炭灰色调，商务首选',
    image: '/images/suit-2.jpg',
    category: 'Business'
  },
  {
    id: 3,
    name: 'Navy Tuxedo',
    price: '¥18,900',
    description: '午夜蓝礼服，优雅绅士之选',
    image: '/images/suit-3.jpg',
    category: 'Formal'
  },
  {
    id: 4,
    name: 'Cashmere Blazer',
    price: '¥22,500',
    description: '纯羊绒面料，极致舒适体验',
    image: '/images/suit-4.jpg',
    category: 'Casual'
  },
  {
    id: 5,
    name: 'Double Breasted',
    price: '¥16,800',
    description: '双排扣设计，复古与现代的完美融合',
    image: '/images/suit-5.jpg',
    category: 'Business'
  },
  {
    id: 6,
    name: 'Summer Linen',
    price: '¥11,200',
    description: '亚麻材质，轻盈透气，夏日必备',
    image: '/images/suit-6.jpg',
    category: 'Casual'
  }
];
*/

export default function SuitsPage() {
  const suits = getSuits();
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-6 tracking-tight">
            西装系列
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-2xl leading-relaxed">
            精选顶级面料，匠心工艺，每一件西装都是对完美的追求
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-8">
          <button className="font-sans text-sm tracking-widest uppercase border-b-2 border-luxury-black pb-1 transition-all duration-300">
            全部
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            商务
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            正式
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            休闲
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {suits.map((suit) => (
            <div key={suit.id} className="group">
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-luxury-dark mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl tracking-widest">
                  {suit.name}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <span className="font-sans text-xs tracking-widest uppercase text-luxury-gray">
                  {suit.category}
                </span>
                <h3 className="font-serif text-xl text-luxury-black group-hover:opacity-60 transition-opacity duration-300">
                  {suit.name}
                </h3>
                <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                  {suit.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-serif text-lg text-luxury-black">
                    {suit.price}
                  </span>
                  <button className="font-sans text-xs tracking-widest uppercase border border-luxury-black px-6 py-3 hover:bg-luxury-black hover:text-white transition-all duration-300">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luxury-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">
            定制您的专属西装
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            预约私人定制服务，我们的裁缝将为您量身打造独一无二的西装
          </p>
          <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
            预约定制
          </button>
        </div>
      </section>
    </main>
  );
}
