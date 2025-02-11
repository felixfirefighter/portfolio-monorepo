import { MAIN_NAVBAR } from '@/models/app/links';
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
    icon: <RiYoutubeLine size={24} />,
  },
  {
    href: '#',
    icon: <RiInstagramLine size={24} />,
  },
  {
    href: '#',
    icon: <RiFacebookLine size={24} />,
  },
  {
    href: '#',
    icon: <RiGithubLine size={24} />,
  },
  {
    href: '#',
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
            className=""
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-center text-neutral-600 text-sm">
        © 2024 Abstractly, Inc. All rights reserved.
      </p>
    </footer>
  );
};
