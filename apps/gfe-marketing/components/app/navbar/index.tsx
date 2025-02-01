'use client';

import { Button } from '@repo/design-system/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      href: '#hero-section',
      title: 'Home',
    },
    {
      href: '#feature-section',
      title: 'Features',
    },
    {
      href: '#pricing-section',
      title: 'Pricing',
    },
    {
      href: '#about-us-section',
      title: 'About Us',
    },
    {
      href: '#contact-section',
      title: 'Contact',
    },
  ];

  return (
    <nav className="w-full">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              width={112}
              height={32}
              src="/app/abstractly.png"
              alt="Abstractly"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link href="/learn-more">
              <Button variant="outline">Learn more</Button>
            </Link>
            <Link href="/pricing">
              <Button>See pricing</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant={'ghost'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-md p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              {links.map((link) => {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-neutral-600 hover:text-neutral-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2">
                <Link href="#feature-section">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Learn more
                  </Button>
                </Link>
                <Link href="#pricing-section">
                  <Button
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    See pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
