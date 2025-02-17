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
    <section className="container">
      <div className="flex flex-col items-center justify-between gap-8 py-16 lg:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="font-semibold text-3xl lg:text-4xl">
            Premium abstract images
          </h1>

          <FeatureListItems items={features} />

          <div className="flex gap-4 pt-4">
            <Link href="/pricing">
              <Button size="lg" variant={'default'}>
                See pricing
              </Button>
            </Link>
            <Link href="/learn-more">
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
