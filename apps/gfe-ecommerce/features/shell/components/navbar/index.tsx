'use client';
import { MAIN_NAVBAR } from '@/features/shell/config/links';
import { RiMenuLine, RiShoppingBag2Line } from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@repo/design-system/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="container fixed z-10 flex items-center justify-between bg-white p-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center" aria-label="Go to home">
          <Image width={105} height={32} src="/app/logo.png" alt="StyleNest" />
        </Link>
        <div className="hidden px-20 lg:flex">
          {MAIN_NAVBAR.map((link) => {
            return (
              <Button variant={'ghost'} key={link.href} className="mx-2">
                <Link href={link.href}>{link.title}</Link>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="flex font-bold">
        <Button size={'icon'} variant={'ghost'}>
          <RiShoppingBag2Line />
        </Button>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button size={'icon'} variant="ghost">
              <RiMenuLine />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle>
                <Image
                  width={105}
                  height={32}
                  src="/app/logo.png"
                  alt="StyleNest"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="py-6">
              {MAIN_NAVBAR.map((link) => {
                return (
                  <div key={link.href} className="py-2">
                    <Link href={link.href}>{link.title}</Link>
                  </div>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
