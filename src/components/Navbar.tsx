import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 text-white bg-transparent">
      <div className="flex flex-col">
        <span className="text-2xl font-serif tracking-widest uppercase">Suitelite</span>
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-80">Define Your Style</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-light">
        <Link href="/" className="hover:opacity-60 transition-opacity">首页</Link>
        <Link href="/suits" className="hover:opacity-60 transition-opacity">西装</Link>
        <Link href="/shirts" className="hover:opacity-60 transition-opacity">衬衫</Link>
        <Link href="/t-shirts" className="hover:opacity-60 transition-opacity">T恤/POLO</Link>
        <Link href="/outerwear" className="hover:opacity-60 transition-opacity">外套</Link>
        <Link href="/accessories" className="hover:opacity-60 transition-opacity">配件</Link>
        <Link href="/inspiration" className="hover:opacity-60 transition-opacity">穿搭灵感</Link>
        <Link href="/about" className="hover:opacity-60 transition-opacity">品牌故事</Link>
      </div>

      <div className="flex items-center space-x-6">
        <button aria-label="Search" className="hover:opacity-60 transition-opacity">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button aria-label="User Profile" className="hover:opacity-60 transition-opacity">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button aria-label="Shopping Cart" className="hover:opacity-60 transition-opacity relative">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 text-[8px] bg-white text-black rounded-full w-3 h-3 flex items-center justify-center font-bold">0</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
