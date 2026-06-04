import Link from 'next/link';
import { getTShirts } from '@/lib/data';

// Static data structure (preserved for reference)
/*
const tshirts = [
  {
    id: 1,
    name: 'Classic Cotton Tee',
    price: '¥880',
    description: '100%纯棉，舒适百搭',
    image: '/images/tshirt-1.jpg',
    category: 'Basic'
  },
  {
    id: 2,
    name: 'Premium Pique Polo',
    price: '¥1,680',
    description: '珠地棉POLO，经典永恒',
    image: '/images/tshirt-2.jpg',
    category: 'Polo'
  },
  {
    id: 3,
    name: 'Slim Fit V-Neck',
    price: '¥1,080',
    description: '修身V领，简约时尚',
    image: '/images/tshirt-3.jpg',
    category: 'Basic'
  },
  {
    id: 4,
    name: 'Linen Blend Tee',
    price: '¥1,280',
    description: '亚麻混纺，夏日清爽',
    image: '/images/tshirt-4.jpg',
    category: 'Summer'
  },
  {
    id: 5,
    name: 'Cashmere Polo',
    price: '¥3,800',
    description: '羊绒POLO，极致奢华',
    image: '/images/tshirt-5.jpg',
    category: 'Premium'
  },
  {
    id: 6,
    name: 'Graphic Print Tee',
    price: '¥1,480',
    description: '艺术印花，个性表达',
    image: '/images/tshirt-6.jpg',
    category: 'Fashion'
  }
];
*/

export default function TShirtsPage() {
  const tshirts = getTShirts();
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-6 tracking-tight">
            T恤/POLO
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-2xl leading-relaxed">
            休闲时光的优雅选择，舒适与时尚的完美平衡
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
            基础款
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            POLO
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            奢华款
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="group">
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-luxury-dark mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl tracking-widest">
                  {tshirt.name}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <span className="font-sans text-xs tracking-widest uppercase text-luxury-gray">
                  {tshirt.category}
                </span>
                <h3 className="font-serif text-xl text-luxury-black group-hover:opacity-60 transition-opacity duration-300">
                  {tshirt.name}
                </h3>
                <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                  {tshirt.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-serif text-lg text-luxury-black">
                    {tshirt.price}
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
            探索休闲时尚
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            从商务到休闲，SUITELITE陪伴您的每一个时刻
          </p>
          <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
            浏览全系列
          </button>
        </div>
      </section>
    </main>
  );
}
