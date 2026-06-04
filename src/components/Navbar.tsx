import { Search, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NAVIGATION_ITEMS } from '@/constant/navigation';
import { BRAND_CONFIG } from '@/config/brand';

const Navbar = ({ isHome = false }: { isHome?: boolean }) => {
  const textColor = isHome ? 'text-white' : 'text-luxury-black';
  const badgeBg = isHome ? 'bg-white text-black' : 'bg-luxury-black text-white';

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 ${textColor} bg-transparent`}>
      <div className="flex flex-col">
        <span className="text-2xl font-serif tracking-widest uppercase">{BRAND_CONFIG.name}</span>
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-80">{BRAND_CONFIG.tagline}</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-light">
        {NAVIGATION_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="hover:opacity-60 transition-opacity">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <Button variant="ghost" size="icon" aria-label="Search" className="hover:opacity-60">
          <Search size={20} strokeWidth={1.5} />
        </Button>
        <Button variant="ghost" size="icon" aria-label="User Profile" className="hover:opacity-60">
          <User size={20} strokeWidth={1.5} />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="hover:opacity-60 relative">
          <ShoppingBag size={20} strokeWidth={1.5} />
          <span className={`absolute -top-1 -right-1 text-[8px] ${badgeBg} rounded-full w-3 h-3 flex items-center justify-center font-bold`}>0</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
