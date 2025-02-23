import { FeatureListItems } from '@/features/app/components/feature-list-items';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  'Minimum 5K image resolution',
  'Various format variants available',
  'Retina display support',
];

export const HeroSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <div className="flex flex-col justify-between gap-8 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <h1 className="font-semibold text-4xl md:text-5xl">
            Premium abstract images
          </h1>

          <div className="py-4">
            <FeatureListItems items={features} />
          </div>

          <div className="flex gap-4 pt-4">
            <Link href="/pricing" aria-label="Go to pricing">
              <Button size="lg" variant={'default'}>
                See pricing
              </Button>
            </Link>
            <Link href="/features" aria-label="Go to features">
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/app/prism-2.png"
              alt="Abstract geometric shapes"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
