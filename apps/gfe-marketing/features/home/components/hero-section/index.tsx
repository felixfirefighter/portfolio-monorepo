import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <div className="flex flex-col justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <h1 className="font-semibold text-4xl md:text-5xl">
            Well crafted abstract images
          </h1>

          <p className="text-gray-600 text-lg">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="/features" aria-label="Go to features page">
              <Button
                aria-label="Learn more about our features"
                variant="outline"
                size="lg"
              >
                View features
              </Button>
            </Link>
            <Link href="/pricing" aria-label="Go to pricing page">
              <Button size="lg" variant={'default'}>
                See pricing
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full flex-1">
          <Image
            src="/app/prism-1.png"
            alt="Abstract geometric shapes"
            width={696}
            height={526}
            className="w-full rounded-lg object-cover md:aspect-[1.3]"
            priority
          />
        </div>
      </div>
    </section>
  );
};
