'use client';
import { RiSearch2Line } from '@remixicon/react';
import { Input } from '@repo/design-system/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import {} from 'react';

const Navbar = () => {
  return (
    <nav className={'fixed z-50 w-full bg-white'}>
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
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

          {/* Search Bar */}
          <div className="flex flex-1 items-center gap-2 rounded border bg-neutral-50 px-4 py-0 shadow">
            <Input
              type="text"
              placeholder="Search image Eg. Landscape"
              className="border-0 p-0 text-sm shadow-none"
            />
            <RiSearch2Line className="text-neutral-400" size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
