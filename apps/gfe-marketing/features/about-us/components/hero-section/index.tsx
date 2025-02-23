import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <div className="flex flex-col justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <h1 className="font-semibold text-4xl md:text-5xl">
            From a tiny desk to the entire world
          </h1>

          <p className="text-gray-600 text-lg">
            As a lean, passionate team, we've made something that most would
            think is impossible - premium abstract images for free and for all.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="/features" aria-label="Go to Features">
              <Button variant="outline" size="lg">
                Features
              </Button>
            </Link>
            <Link href="/pricing" aria-label="Go to Pricing">
              <Button size="lg" variant={'default'}>
                See pricing
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/app/prism-1.png"
              alt="Abstract geometric shapes"
              width={1392}
              height={1052}
              className="rounded-lg object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
