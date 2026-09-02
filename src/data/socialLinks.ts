export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  badge: string;
}

export const socialLinksData: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yashubhut-cpu',
    iconName: 'Github',
    badge: '@yashubhut-cpu'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yash-bhut/',
    iconName: 'Linkedin',
    badge: 'in/yash-bhut'
  },
  {
    name: 'Email',
    url: 'mailto:yashubhut@gmail.com',
    iconName: 'Mail',
    badge: 'yashubhut@gmail.com'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mr._yash_bhut/',
    iconName: 'Instagram',
    badge: '@mr._yash_bhut'
  }
];
