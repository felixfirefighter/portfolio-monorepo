'use client';

import { MAIN_NAVBAR } from '@/features/shell/config/links';
import { RiMenuLine } from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@repo/design-system/components/ui/sheet';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={'fixed z-10 w-full border-b bg-white'}>
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center" aria-label="Go to home">
            <Image
              width={134}
              height={32}
              src="/app/hacker-news-logo.png"
              alt="Hacker News"
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
                    aria-label={`Go to ${link.title}`}
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex font-bold">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button size={'icon'} variant="ghost">
                  <RiMenuLine />
                </Button>
              </SheetTrigger>
              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      width={134}
                      height={32}
                      src="/app/hacker-news-logo.png"
                      alt="Hacker News"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  {MAIN_NAVBAR.map((link) => {
                    return (
                      <div className="py-1" key={link.title}>
                        <Link
                          href={link.href}
                          className={cn(
                            'flex gap-3 rounded-md p-1.5 text-neutral-600 ',
                            {
                              'bg-primary/10 text-primary':
                                pathname === link.href,
                            }
                          )}
                          aria-label={`Go to ${link.title}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.icon}
                          <span>{link.title}</span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
