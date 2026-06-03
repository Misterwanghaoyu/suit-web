import Link from 'next/link';

const inspirations = [
  {
    id: 1,
    title: '商务精英',
    subtitle: 'Business Excellence',
    description: '深色西装搭配白色衬衫，展现专业与权威',
    items: ['Classic Wool Blend', 'Slim Fit Charcoal', 'Classic White Oxford'],
    image: '/images/inspiration-1.jpg'
  },
  {
    id: 2,
    title: '休闲周末',
    subtitle: 'Weekend Casual',
    description: 'POLO衫配休闲裤，轻松自在不失格调',
    items: ['Premium Pique Polo', 'Cashmere Blazer', 'Leather Belt'],
    image: '/images/inspiration-2.jpg'
  },
  {
    id: 3,
    title: '晚宴礼服',
    subtitle: 'Black Tie Event',
    description: '午夜蓝礼服配精致袖扣，优雅绅士之选',
    items: ['Navy Tuxedo', 'French Cuff', 'Cufflinks Set'],
    image: '/images/inspiration-3.jpg'
  },
  {
    id: 4,
    title: '都市时尚',
    subtitle: 'Urban Style',
    description: '皮革夹克配修身裤，时尚前卫',
    items: ['Leather Jacket', 'Slim Fit Blue', 'Leather Gloves'],
    image: '/images/inspiration-4.jpg'
  },
  {
    id: 5,
    title: '夏日清爽',
    subtitle: 'Summer Breeze',
    description: '亚麻材质，轻盈透气，夏日必备',
    items: ['Summer Linen', 'Linen Summer', 'Linen Blend Tee'],
    image: '/images/inspiration-5.jpg'
  },
  {
    id: 6,
    title: '秋冬温暖',
    subtitle: 'Winter Warmth',
    description: '羊绒大衣配围巾，温暖与优雅并存',
    items: ['Cashmere Overcoat', 'Pocket Square', 'Leather Gloves'],
    image: '/images/inspiration-6.jpg'
  }
];

export default function InspirationPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-6 tracking-tight">
            穿搭灵感
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-2xl leading-relaxed">
            从商务到休闲，探索不同场合的完美搭配
          </p>
        </div>
      </section>

      {/* Inspiration Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {inspirations.map((inspiration, index) => (
            <div 
              key={inspiration.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-luxury-dark overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-3xl tracking-widest">
                  {inspiration.title}
                </div>
              </div>
              
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <span className="font-sans text-xs tracking-widest uppercase text-luxury-gray">
                  {inspiration.subtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-luxury-black tracking-tight">
                  {inspiration.title}
                </h2>
                <p className="font-sans text-base text-luxury-gray leading-relaxed">
                  {inspiration.description}
                </p>
                
                <div className="pt-4">
                  <p className="font-sans text-xs tracking-widest uppercase text-luxury-gray mb-4">
                    推荐单品
                  </p>
                  <ul className="space-y-2">
                    {inspiration.items.map((item, idx) => (
                      <li key={idx} className="font-sans text-sm text-luxury-black flex items-center">
                        <span className="w-1 h-1 bg-luxury-black mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="font-sans text-sm tracking-widest uppercase border border-luxury-black px-8 py-3 hover:bg-luxury-black hover:text-white transition-all duration-300 mt-6">
                  查看搭配
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-luxury-dark py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-16 tracking-tight text-center">
            穿搭技巧
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-white/30 flex items-center justify-center">
                <span className="font-serif text-3xl text-white">01</span>
              </div>
              <h3 className="font-serif text-xl text-white">色彩搭配</h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                经典黑白灰永不过时，尝试同色系深浅搭配营造层次感
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-white/30 flex items-center justify-center">
                <span className="font-serif text-3xl text-white">02</span>
              </div>
              <h3 className="font-serif text-xl text-white">合身是关键</h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                无论多昂贵的服装，不合身都会影响整体效果
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto border border-white/30 flex items-center justify-center">
                <span className="font-serif text-3xl text-white">03</span>
              </div>
              <h3 className="font-serif text-xl text-white">细节决定成败</h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                袖扣、口袋巾、领带等配件能为造型增添精致感
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luxury-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">
            需要专业建议？
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            预约我们的造型顾问，获取个性化的穿搭建议
          </p>
          <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
            预约咨询
          </button>
        </div>
      </section>
    </main>
  );
}
