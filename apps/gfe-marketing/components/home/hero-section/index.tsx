import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-8 py-16 md:flex-row">
        <div className="flex-1 space-y-6">
          <h1 className="font-semibold text-4xl leading-tight md:text-5xl">
            Well crafted abstract images
          </h1>

          <p className="text-gray-600 text-lg">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>

          <div className="flex gap-4">
            <Button variant="outline" size="lg">
              Learn more
            </Button>
            <Button size="lg" variant={'default'}>
              See pricing
            </Button>
          </div>
        </div>

        <div className="relative flex-1">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/app/prism.png"
              alt="Abstract geometric shapes"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
