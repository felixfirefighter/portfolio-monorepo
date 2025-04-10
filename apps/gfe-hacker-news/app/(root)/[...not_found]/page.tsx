import { Button } from '@repo/design-system/components/ui/button';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found - Hacker News',
  description: 'Stepping into the unknown',
};

export default function NotFound() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="container">
        <p className="mb-2 font-semibold text-primary">Not found</p>
        <h1 className="mb-4 font-bold text-4xl text-neutral-900 md:text-5xl lg:text-6xl">
          We can’t find the page
        </h1>
        <p className="mb-12 text-neutral-600 text-xl">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <Link href="/" aria-label="Back to Home">
          <Button size={'lg'}>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
