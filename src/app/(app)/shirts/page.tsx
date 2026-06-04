import Link from 'next/link';
import { getShirts } from '@/lib/data';

// Static data structure (preserved for reference)
/*
const shirts = [
  {
    id: 1,
    name: 'Classic White Oxford',
    price: '¥2,800',
    description: '经典牛津纺，商务百搭之选',
    image: '/images/shirt-1.jpg',
    category: 'Business'
  },
  {
    id: 2,
    name: 'Slim Fit Blue',
    price: '¥3,200',
    description: '修身剪裁，浅蓝色调，清新优雅',
    image: '/images/shirt-2.jpg',
    category: 'Business'
  },
  {
    id: 3,
    name: 'Egyptian Cotton',
    price: '¥4,500',
    description: '埃及长绒棉，极致柔软舒适',
    image: '/images/shirt-3.jpg',
    category: 'Premium'
  },
  {
    id: 4,
    name: 'Patterned Check',
    price: '¥3,600',
    description: '格纹设计，增添时尚活力',
    image: '/images/shirt-4.jpg',
    category: 'Casual'
  },
  {
    id: 5,
    name: 'French Cuff',
    price: '¥5,200',
    description: '法式袖口，正式场合首选',
    image: '/images/shirt-5.jpg',
    category: 'Formal'
  },
  {
    id: 6,
    name: 'Linen Summer',
    price: '¥2,400',
    description: '亚麻材质，透气清爽',
    image: '/images/shirt-6.jpg',
    category: 'Casual'
  }
];
*/

export default function ShirtsPage() {
  const shirts = getShirts();
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-6 tracking-tight">
            衬衫系列
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-2xl leading-relaxed">
            精选顶级面料，匠心工艺，每一件衬衫都诠释着优雅与品质
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
          {shirts.map((shirt) => (
            <div key={shirt.id} className="group">
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-luxury-dark mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl tracking-widest">
                  {shirt.name}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <span className="font-sans text-xs tracking-widest uppercase text-luxury-gray">
                  {shirt.category}
                </span>
                <h3 className="font-serif text-xl text-luxury-black group-hover:opacity-60 transition-opacity duration-300">
                  {shirt.name}
                </h3>
                <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                  {shirt.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-serif text-lg text-luxury-black">
                    {shirt.price}
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
            定制您的专属衬衫
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            预约私人定制服务，选择您喜欢的面料和领型
          </p>
          <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
            预约定制
          </button>
        </div>
      </section>
    </main>
  );
}
