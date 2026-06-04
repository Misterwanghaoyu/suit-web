export interface SocialMediaLink {
  name: string;
  icon: string;
  url?: string;
}

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  { name: 'WeChat', icon: 'W' },
  { name: 'Weibo', icon: 'W' },
  { name: 'Instagram', icon: 'Instagram' },
  { name: 'YouTube', icon: 'YouTube' },
];
