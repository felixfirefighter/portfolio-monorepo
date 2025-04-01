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
    <footer className="py-10 lg:py-24">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-2 font-semibold text-xl">Join our newsletter</h3>
          <p className=" text-neutral-600">
            We’ll send you a nice letter once per week. No spam.
          </p>
        </div>

        <div className="md:flex md:space-x-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="mb-4 flex-1 md:mb-0"
          />
          <Button className="w-full bg-primary text-white hover:bg-primary md:w-auto">
            Subscribe
          </Button>
        </div>

        <div className="md:py-8 lg:py-0">
          <Image
            width={105}
            height={32}
            src="/app/logo.png"
            alt="StyleNest"
            className="mb-6"
          />

          <p className=" text-neutral-600 md:w-1/2">
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

        <div className="col-span-full flex flex-col items-center justify-between border-t py-8 text-neutral-500 text-sm md:flex-row">
          <p className="pb-8 md:pb-0">
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
