import { MAIN_NAVBAR } from '@/features/shell/config/links';
import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';

const socialLinks = [
  {
    href: '#',
    title: 'Youtube',
    icon: <RiYoutubeLine size={24} />,
  },
  {
    href: '#',
    title: 'Instagram',
    icon: <RiInstagramLine size={24} />,
  },
  {
    href: '#',
    title: 'Facebook',
    icon: <RiFacebookLine size={24} />,
  },
  {
    href: '#',
    title: 'Github',
    icon: <RiGithubLine size={24} />,
  },
  {
    href: '#',
    title: 'Twitter',
    icon: <RiTwitterXLine size={24} />,
  },
];

export const Footer = () => {
  return (
    <footer className="container space-y-4 py-8">
      <div className="flex justify-center space-x-6 pb-4 text-gray-600 text-sm">
        {MAIN_NAVBAR.map((link, index) => (
          <a key={index} href={link.href} className="text-neutral-600">
            {link.title}
          </a>
        ))}
      </div>
      <div className="flex justify-center space-x-6 text-neutral-400">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.title}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} , Inc. All rights reserved.
      </p>
    </footer>
  );
};
