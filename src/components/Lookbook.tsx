import React from 'react';
import { ArrowRight } from 'lucide-react';

const Lookbook = () => {
  return (
    <section className="px-10 md:px-24 pb-24">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 bg-zinc-900 overflow-hidden">
        {/* Images Side */}
        <div className="lg:col-span-2 grid grid-cols-3 gap-1">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" 
            alt="Lookbook 1" 
            className="h-[600px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" 
            alt="Lookbook 2" 
            className="h-[600px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <img 
            src="https://canali.vtexassets.com/assets/vtex.file-manager-graphql/images/339a25db-4dfc-41cc-8640-1ba59c6272a6___3cfabf6c008620c4813c3edbdc4c6346.webp" 
            alt="Lookbook 3" 
            className="h-[600px] w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center px-12 py-20 lg:py-0 text-white">
          <div className="max-w-xs">
            <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 mb-4 block">Lookbook</span>
            <h2 className="text-3xl font-serif tracking-widest leading-tight mb-6">
              型格灵感 · <br />
              随心搭配
            </h2>
            <p className="text-sm text-zinc-400 font-light mb-10 leading-relaxed">
              从经典商务到休闲日常，探索更多场合的着装灵感
            </p>
            <button className="flex items-center space-x-4 border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 group">
              <span className="uppercase text-[10px] tracking-[0.2em]">探索穿搭灵感</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
