'use client';

import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';
import { Input } from '@repo/design-system/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { href: '#', title: 'Youtube', icon: <RiYoutubeLine size={24} /> },
  { href: '#', title: 'Instagram', icon: <RiInstagramLine size={24} /> },
  { href: '#', title: 'Facebook', icon: <RiFacebookLine size={24} /> },
  { href: '#', title: 'Github', icon: <RiGithubLine size={24} /> },
  { href: '#', title: 'Twitter', icon: <RiTwitterXLine size={24} /> },
];

const categoryLinks = [
  { href: '#', title: 'Unisex' },
  { href: '#', title: 'Women' },
  { href: '#', title: 'Men' },
];

const collectionLinks = [
  { href: '#', title: 'Latest arrivals' },
  { href: '#', title: 'Urban Oasis' },
  { href: '#', title: 'Cozy Comfort' },
  { href: '#', title: 'Fresh Fusion' },
];

export const Footer = () => {
  return (
    <footer className="container border-t py-10 shadow">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-semibold text-xl">Join our newsletter</h3>
          <p className="pb-6 text-neutral-600">
            We’ll send you a nice letter once per week. No spam.
          </p>
          <div className="md:flex md:space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="mb-4 flex-1 md:mb-0"
            />
            <Button className="w-full bg-primary text-white hover:bg-primary">
              Subscribe
            </Button>
          </div>
        </div>

        <div>
          <Image
            width={105}
            height={32}
            src="/app/logo.png"
            alt="StyleNest"
            className="mb-6"
          />

          <p className=" text-neutral-600">
            Craft stunning style journeys that weave more joy into every thread.
          </p>
        </div>

        <div className="grid-col-1 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-neutral-500 text-sm">SHOP CATEGORIES</h4>
            <div className=" text-neutral-600">
              {categoryLinks.map((link) => (
                <div key={link.title}>
                  <Button
                    variant={'link'}
                    className="px-0 font-medium text-neutral-600"
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className=" mb-3 text-neutral-500 text-sm">SHOP COLLECTIONS</h4>
            <div className="text-neutral-600">
              {collectionLinks.map((link) => (
                <div key={link.title}>
                  <Button
                    variant={'link'}
                    className="px-0 font-medium text-neutral-600"
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t py-8 text-neutral-500 text-sm md:flex-row">
          <p className="pb-8">
            © {new Date().getFullYear()} StyleNest, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 md:mt-0">
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
        </div>
      </div>
    </footer>
  );
};
