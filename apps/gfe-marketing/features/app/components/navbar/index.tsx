'use client';

import { MAIN_NAVBAR } from '@/features/app/models/links';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn('fixed z-10 w-full bg-white', { 'border-b': isScrolled })}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Go to home">
            <Image
              width={112}
              height={32}
              src="/app/abstractly.png"
              alt="Abstractly"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {MAIN_NAVBAR.map((link) => {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-neutral-600 hover:text-neutral-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`Go to ${link.title}`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Link href="/features" aria-label="Go to features">
              <Button variant="outline">Learn more</Button>
            </Link>
            <Link href="/pricing" aria-label="Go to pricing">
              <Button>See pricing</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant={'ghost'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-md p-2 focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenuLine size={24} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 z-10 w-full bg-white shadow lg:hidden">
            <div className="flex flex-col space-y-4 p-4">
              {MAIN_NAVBAR.map((link) => {
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-neutral-600 hover:text-neutral-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={`Go to ${link.title}`}
                  >
                    {link.title}
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2">
                <Link href="/features">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Go to features"
                  >
                    Learn more
                  </Button>
                </Link>
                <Link href="/pricing" aria-label="Go to pricing">
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
