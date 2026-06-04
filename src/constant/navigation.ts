export interface NavItem {
  label: string;
  href: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '西装', href: '/suits' },
  { label: '衬衫', href: '/shirts' },
  { label: 'T恤/POLO', href: '/t-shirts' },
  { label: '外套', href: '/outerwear' },
  { label: '配件', href: '/accessories' },
  { label: '穿搭灵感', href: '/inspiration' },
  { label: '品牌故事', href: '/about' },
];
