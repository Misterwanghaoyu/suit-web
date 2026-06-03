import Link from 'next/link';

const outerwear = [
  {
    id: 1,
    name: 'Cashmere Overcoat',
    price: '¥28,800',
    description: '纯羊绒大衣，温暖与优雅并存',
    image: '/images/outerwear-1.jpg',
    category: 'Coat'
  },
  {
    id: 2,
    name: 'Wool Blend Blazer',
    price: '¥12,600',
    description: '羊毛混纺西装外套，商务休闲两相宜',
    image: '/images/outerwear-2.jpg',
    category: 'Blazer'
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: '¥18,900',
    description: '意大利真皮夹克，经典永恒',
    image: '/images/outerwear-3.jpg',
    category: 'Jacket'
  },
  {
    id: 4,
    name: 'Trench Coat',
    price: '¥15,800',
    description: '风衣经典款，英伦风情',
    image: '/images/outerwear-4.jpg',
    category: 'Coat'
  },
  {
    id: 5,
    name: 'Down Vest',
    price: '¥8,600',
    description: '轻薄羽绒背心，保暖不臃肿',
    image: '/images/outerwear-5.jpg',
    category: 'Vest'
  },
  {
    id: 6,
    name: 'Suede Jacket',
    price: '¥16,800',
    description: '麂皮夹克，质感非凡',
    image: '/images/outerwear-6.jpg',
    category: 'Jacket'
  }
];

export default function OuterwearPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-6 tracking-tight">
            外套系列
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-2xl leading-relaxed">
            从经典风衣到奢华羊绒，每一件外套都是对品质的极致追求
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
            大衣
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            夹克
          </button>
          <button className="font-sans text-sm tracking-widest uppercase text-luxury-gray hover:text-luxury-black border-b-2 border-transparent hover:border-luxury-black pb-1 transition-all duration-300">
            西装外套
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {outerwear.map((item) => (
            <div key={item.id} className="group">
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-luxury-dark mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-2xl tracking-widest">
                  {item.name}
                </div>
              </div>
              
              {/* Product Info */}
              <div className="space-y-3">
                <span className="font-sans text-xs tracking-widest uppercase text-luxury-gray">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-luxury-black group-hover:opacity-60 transition-opacity duration-300">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-serif text-lg text-luxury-black">
                    {item.price}
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
            定制您的外套
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            选择面料、款式和细节，打造专属于您的完美外套
          </p>
          <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
            预约定制
          </button>
        </div>
      </section>
    </main>
  );
}
