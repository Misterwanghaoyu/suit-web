import { getAboutData } from '@/lib/data';

export default function AboutPage() {
  const data = getAboutData();
  
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-8 tracking-tight">
            {data.hero.title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-luxury-gray max-w-3xl leading-relaxed">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-luxury-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-luxury-dark flex items-center justify-center">
              <div className="text-white/10 font-serif text-4xl tracking-widest text-center">
                {data.story.year}
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">
                {data.story.title}
              </h2>
              {data.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="font-sans text-base md:text-lg text-white/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
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
            {data.values.map((value) => (
              <div key={value.number} className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto border border-luxury-black flex items-center justify-center">
                  <span className="font-serif text-2xl text-luxury-black">{value.number}</span>
                </div>
                <h3 className="font-serif text-xl text-luxury-black">{value.title}</h3>
                <p className="font-sans text-sm text-luxury-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
            {data.timeline.map((item) => (
              <div key={item.year} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-48 flex-shrink-0">
                  <span className="font-serif text-3xl text-white">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-sans text-base text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
            {data.quote.text}
          </blockquote>
          <cite className="font-sans text-sm tracking-widest uppercase text-luxury-gray not-italic">
            — {data.quote.author}
          </cite>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-luxury-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">
            {data.contact.title}
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 mb-10 leading-relaxed">
            {data.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {data.contact.buttons.map((button, index) => (
              <button 
                key={index}
                className={`font-sans text-sm tracking-widest uppercase ${
                  button.variant === 'primary' 
                    ? 'border border-white px-10 py-4 hover:bg-white hover:text-luxury-black transition-all duration-300' 
                    : 'text-white/70 hover:text-white transition-all duration-300'
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
