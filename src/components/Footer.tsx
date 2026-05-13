"use client";

import React from 'react';
import { Send, Instagram, Youtube, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 px-10 md:px-24 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Info */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <span className="text-white text-xl font-serif tracking-widest uppercase">Suitelite</span>
            <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">Define Your Style</span>
          </div>
          <p className="text-[10px] leading-relaxed max-w-xs">
            我们相信，服装不仅是外在的表达，更是内在态度的延伸。Suitelite，陪伴你在每一个重要时刻自信从容。
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 cursor-pointer transition-colors">
              <span className="text-[10px]">W</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 cursor-pointer transition-colors">
              <span className="text-[10px]">W</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 cursor-pointer transition-colors">
              <Instagram size={14} />
            </div>
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 cursor-pointer transition-colors">
              <Youtube size={14} />
            </div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-8">购物指南</h4>
          <ul className="flex flex-col space-y-4 text-[11px] tracking-wider font-light">
            <li className="hover:text-white cursor-pointer transition-colors">尺码指南</li>
            <li className="hover:text-white cursor-pointer transition-colors">配送信息</li>
            <li className="hover:text-white cursor-pointer transition-colors">退换政策</li>
            <li className="hover:text-white cursor-pointer transition-colors">常见问题</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-8">关于我们</h4>
          <ul className="flex flex-col space-y-4 text-[11px] tracking-wider font-light">
            <li className="hover:text-white cursor-pointer transition-colors">品牌故事</li>
            <li className="hover:text-white cursor-pointer transition-colors">工艺与面料</li>
            <li className="hover:text-white cursor-pointer transition-colors">门店查询</li>
            <li className="hover:text-white cursor-pointer transition-colors">加入我们</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-8">订阅我们的资讯</h4>
          <p className="text-[10px] mb-6">获取新品发布和专属优惠信息</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="输入你的邮箱" 
              className="w-full bg-transparent border border-zinc-800 px-4 py-3 text-xs focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800 p-2 hover:bg-zinc-700 transition-colors">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] tracking-[0.1em] uppercase">
        <span>© 2024 SUITELITE. ALL RIGHTS RESERVED.</span>
        <div className="flex space-x-8">
          <span className="hover:text-white cursor-pointer transition-colors">隐私政策</span>
          <span className="hover:text-white cursor-pointer transition-colors">使用条款</span>
          <span className="hover:text-white cursor-pointer transition-colors">网站地图</span>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:text-white transition-colors"
          >
            <span>TOP</span>
            <ChevronUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
