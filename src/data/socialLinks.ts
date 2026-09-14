import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/xrefs0/',
    label: 'Connect with Masa on LinkedIn',
    icon: 'linkedin',
    priority: 1,
    featured: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/XREFS0',
    label: 'Explore Repositories on GitHub (@XREFS0)',
    icon: 'github',
    priority: 2,
    featured: true,
  },
  {
    id: 'website',
    name: 'Website',
    url: 'http://xrefs0.com/',
    label: 'Official Website (xrefs0.com)',
    icon: 'globe',
    priority: 3,
    featured: true,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/MrMasaOfficial',
    label: 'Direct Chat on Telegram (@MrMasaOfficial)',
    icon: 'telegram',
    priority: 4,
    featured: true,
  },
  {
    id: 'telegram-channel',
    name: 'Telegram Channel',
    url: 'https://t.me/XREFS0_CHANNEL',
    label: 'Security & Updates Channel (@XREFS0_CHANNEL)',
    icon: 'telegram',
    priority: 5,
    featured: false,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@XREFS0',
    label: 'Technical Videos & Research on YouTube (@XREFS0)',
    icon: 'youtube',
    priority: 6,
    featured: false,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/xrefs0/',
    label: 'Follow on Instagram (@xrefs0)',
    icon: 'instagram',
    priority: 7,
    featured: false,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/MrMasaOfficial',
    label: 'Facebook Profile (@MrMasaOfficial)',
    icon: 'facebook',
    priority: 8,
    featured: false,
  },
];

export const primaryEmail = 'masaprogram3@gmail.com';
export const mailtoUrl = `mailto:${primaryEmail}`;
