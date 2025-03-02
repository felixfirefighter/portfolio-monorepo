'use client';
import {} from '@remixicon/react';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
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
          <Link
            href="/"
            className="flex items-center"
            aria-label="Go to home page"
          >
            <Image
              width={32}
              height={32}
              src="/app/logo.png"
              alt="Pinsplash"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
