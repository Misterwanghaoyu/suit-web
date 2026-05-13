import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Gemini_Generated_Image_itx35vitx35vitx3.png" 
          alt="Man in a tailored suit" 
          className="hidden md:block w-full h-full object-cover opacity-60 object-top"
        />
        <img 
          src="/Gemini_Generated_Image_shjgv6shjgv6shjg.png" 
          alt="Man in a tailored suit" 
          className="md:hidden w-full h-full object-cover opacity-60 object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-24">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-4">
            TAILORED <br />
            FOR EXCELLENCE
          </h1>
          <div className="flex flex-col space-y-2 mb-10">
            <h2 className="text-white text-2xl font-light tracking-widest">精剪于型 · 优雅于心</h2>
            <p className="text-zinc-300 font-light">每一套西装，都是你态度的表达</p>
          </div>
          
          <button className="flex items-center space-x-4 border border-white/40 bg-white/5 backdrop-blur-sm text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 group">
            <span className="uppercase text-sm tracking-widest">探索西装系列</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-16 left-10 md:left-24 flex items-center space-x-6 text-white text-sm font-light">
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="mb-2">01</span>
            <div className="w-8 h-[2px] bg-white" />
          </div>
          <div className="flex flex-col items-center group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <span className="mb-2">02</span>
            <div className="w-8 h-[1px] bg-white/40" />
          </div>
          <div className="flex flex-col items-center group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <span className="mb-2">03</span>
            <div className="w-8 h-[1px] bg-white/40" />
          </div>
        </div>
      </div>

      {/* Sidebar Features */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col space-y-8 items-end border-r border-white/20 pr-6 py-10">
        <span className="text-white text-[10px] tracking-[0.4em] uppercase opacity-60 [writing-mode:vertical-rl] rotate-180">Classic</span>
        <span className="text-white text-[10px] tracking-[0.4em] uppercase opacity-60 [writing-mode:vertical-rl] rotate-180">Quality</span>
        <span className="text-white text-[10px] tracking-[0.4em] uppercase opacity-60 [writing-mode:vertical-rl] rotate-180">Confidence</span>
      </div>
    </section>
  );
};

export default Hero;
