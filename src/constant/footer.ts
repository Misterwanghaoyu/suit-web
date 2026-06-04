export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: '购物指南',
    links: ['尺码指南', '配送信息', '退换政策', '常见问题'],
  },
  {
    title: '关于我们',
    links: ['品牌故事', '工艺与面料', '门店查询', '加入我们'],
  },
];

export const BOTTOM_LINKS = ['隐私政策', '使用条款', '网站地图'];
