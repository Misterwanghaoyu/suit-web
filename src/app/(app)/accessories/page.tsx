import Link from 'next/link';

const accessories = [
  {
    id: 1,
    name: 'Silk Tie - Navy',
    price: '¥1,280',
    description: '真丝领带，经典海军蓝',
    image: '/images/accessory-1.jpg',
    category: 'Tie'
  },
  {
    id: 2,
    name: 'Leather Belt',
    price: '¥2,400',
    description: '意大利真皮皮带，手工缝制',
    image: '/images/accessory-2.jpg',
    category: 'Belt'
  },
  {
    id: 3,
    name: 'Cufflinks Set',
    price: '¥3,600',
    description: '袖扣套装，精致优雅',
    image: '/images/accessory-3.jpg',
    category: 'Cufflinks'
  },
  {
    id: 4,
    name: 'Pocket Square',
    price: '¥880',
    description: '真丝口袋巾，多种花色',
    image: '/images/accessory-4.jpg',
    category: 'Pocket Square'
  },
  {
    id: 5,
    name: 'Leather Wallet',
    price: '¥4,200',
    description: '手工皮夹，简约实用',
    image: '/images/accessory-5.jpg',
    category: 'Wallet'
  },
  {
    id: 6,
    name: 'Suspenders',
    price: '¥1,680',
    description: '真皮背带，复古时尚',
    image: '/images/accessory-6.jpg',
    category: 'Suspenders'
  },
  {
    id: 7,
    name: 'Leather Gloves',
    price: '¥2,800',
    description: '羊皮手套，温暖舒适',
    image: '/images/accessory-7.jpg',
    category: 'Gloves'
  },
  {
    id: 8,
    name: 'Watch Strap',
    price: '¥1,480',
    description: '真皮表带，多色可选',
    image: '/images/accessory-8.jpg',
    category: 'Watch Strap'
  }
];

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-6 tracking-tight">
            配件系列
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-2xl leading-relaxed">
            细节之处见真章，精选配件为您的造型画龙点睛
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
            领带
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            皮带
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            袖扣
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            口袋巾
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item) => (
            <div key={item.id} className="group">
              {/* Image Placeholder */}
              <div className="aspect-square bg-luxury-dark mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-lg tracking-widest text-center px-4">
                  {item.name}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <span className="font-sans text-xs tracking-widest uppercase text-luxury-gray">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-luxury-black group-hover:opacity-60 transition-opacity duration-300">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-serif text-base text-luxury-black">
                    {item.price}
                  </span>
                  <button className="font-sans text-xs tracking-widest uppercase border border-luxury-black px-4 py-2 hover:bg-luxury-black hover:text-white transition-all duration-300">
                    查看
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
            完善您的造型
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            从领带到袖扣，每一个细节都彰显品味
          </p>
          <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
            浏览全系列
          </button>
        </div>
      </section>
    </main>
  );
}
