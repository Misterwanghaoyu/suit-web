export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-8 tracking-tight">
            品牌故事
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-3xl leading-relaxed">
            自1998年创立以来，SUITELITE始终致力于为追求卓越的绅士们提供顶级的西装定制服务
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-luxury-dark flex items-center justify-center">
              <div className="text-white/10 font-serif text-4xl tracking-widest text-center">
                EST. 1998
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
                传承与创新
              </h2>
              <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed">
                SUITELITE的故事始于意大利佛罗伦萨的一个小裁缝店。创始人马可·罗西先生带着对传统工艺的执着和对现代美学的理解，开始了他的西装定制之旅。
              </p>
              <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed">
                二十五年过去了，我们从一个小作坊发展成为享誉国际的奢侈品牌，但我们的初心从未改变——每一针每一线，都承载着对完美的追求。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-black mb-6 tracking-tight">
              品牌价值观
            </h2>
            <p className="font-sans text-lg text-luxury-gray max-w-2xl mx-auto">
              我们相信，真正的奢侈品不仅仅是物质，更是一种生活态度
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto border border-luxury-black flex items-center justify-center">
                <span className="font-serif text-2xl text-luxury-black">01</span>
              </div>
              <h3 className="font-serif text-xl text-luxury-black">匠心工艺</h3>
              <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                每一件西装都经过300多道工序，由拥有20年以上经验的裁缝手工制作
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto border border-luxury-black flex items-center justify-center">
                <span className="font-serif text-2xl text-luxury-black">02</span>
              </div>
              <h3 className="font-serif text-xl text-luxury-black">顶级面料</h3>
              <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                严格甄选意大利、英国等地的顶级面料供应商，确保每一寸面料都达到最高标准
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto border border-luxury-black flex items-center justify-center">
                <span className="font-serif text-2xl text-luxury-black">03</span>
              </div>
              <h3 className="font-serif text-xl text-luxury-black">专属定制</h3>
              <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                为每位客户提供一对一的定制服务，打造真正符合个人气质的专属西装
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-luxury-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-20 tracking-tight text-center">
            发展历程
          </h2>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-48 flex-shrink-0">
                <span className="font-serif text-3xl text-white">1998</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-white mb-3">品牌创立</h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  马可·罗西在佛罗伦萨创立SUITELITE，开始为当地绅士提供定制西装服务
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-48 flex-shrink-0">
                <span className="font-serif text-3xl text-white">2005</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-white mb-3">国际扩张</h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  在米兰和巴黎开设旗舰店，开始服务国际客户
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-48 flex-shrink-0">
                <span className="font-serif text-3xl text-white">2015</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-white mb-3">进入亚洲市场</h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  在上海和东京开设精品店，将意式优雅带给亚洲绅士
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-48 flex-shrink-0">
                <span className="font-serif text-3xl text-white">2023</span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-white mb-3">数字时代</h3>
                <p className="font-sans text-base text-white/60 leading-relaxed">
                  推出在线定制平台，让全球客户都能享受SUITELITE的专属服务
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-12 border border-luxury-black flex items-center justify-center">
            <span className="font-serif text-3xl text-luxury-black">"</span>
          </div>
          <blockquote className="font-serif text-2xl md:text-4xl text-luxury-black mb-8 leading-relaxed tracking-tight">
            优雅不是浮华，而是内在的从容与自信
          </blockquote>
          <cite className="font-sans text-sm tracking-widest uppercase text-luxury-gray not-italic">
            — 马可·罗西，SUITELITE创始人
          </cite>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-luxury-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">
            联系我们
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            如需了解更多品牌信息或预约定制服务，欢迎与我们联系
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="font-sans text-sm tracking-widest uppercase border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300">
              预约咨询
            </button>
            <button className="font-sans text-sm tracking-widest uppercase text-white/70 hover:text-white transition-all duration-300">
              查看门店
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
