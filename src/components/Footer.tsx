"use client";

import React from 'react';
import { Send, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FOOTER_LINKS, BOTTOM_LINKS } from '@/constant/footer';
import { SOCIAL_MEDIA_LINKS } from '@/constant/social';
import { BRAND_CONFIG } from '@/config/brand';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Instagram':
        return <span className="text-[10px]">IG</span>;
      case 'YouTube':
        return <span className="text-[10px]">YT</span>;
      default:
        return <span className="text-[10px]">{icon}</span>;
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 px-10 md:px-24 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Info */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <span className="text-white text-xl font-serif tracking-widest uppercase">{BRAND_CONFIG.name}</span>
            <span className="text-[8px] tracking-[0.3em] uppercase opacity-60">{BRAND_CONFIG.tagline}</span>
          </div>
          <p className="text-[10px] leading-relaxed max-w-xs">
            我们相信，服装不仅是外在的表达，更是内在态度的延伸。Suitelite，陪伴你在每一个重要时刻自信从容。
          </p>
          <div className="flex space-x-4">
            {SOCIAL_MEDIA_LINKS.map((social, index) => (
              <div key={index} className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 cursor-pointer transition-colors">
                {renderSocialIcon(social.icon)}
              </div>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        {FOOTER_LINKS.map((group, index) => (
          <div key={index}>
            <h4 className="text-white text-xs tracking-widest uppercase mb-8">{group.title}</h4>
            <ul className="flex flex-col space-y-4 text-[11px] tracking-wider font-light">
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex} className="hover:text-white cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-xs tracking-widest uppercase mb-8">订阅我们的资讯</h4>
          <p className="text-[10px] mb-6">获取新品发布和专属优惠信息</p>
          <div className="relative">
            <Input 
              type="email" 
              placeholder="输入你的邮箱"
              className="bg-transparent border-zinc-800 text-xs focus:border-zinc-600"
            />
            <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 bg-zinc-800 hover:bg-zinc-700 h-8 w-8">
              <Send size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] tracking-[0.1em] uppercase">
        <span>{BRAND_CONFIG.copyright}</span>
        <div className="flex space-x-8">
          {BOTTOM_LINKS.map((link, index) => (
            <span key={index} className="hover:text-white cursor-pointer transition-colors">
              {link}
            </span>
          ))}
          <Button 
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:text-white"
          >
            <span>TOP</span>
            <ChevronUp size={14} className="ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
