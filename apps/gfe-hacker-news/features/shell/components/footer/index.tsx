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
    <footer className="container space-y-4 py-8 md:flex md:items-center md:justify-between md:space-y-0">
      <p className="text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Hacker News, Inc. All rights reserved.
      </p>
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
    </footer>
  );
};
