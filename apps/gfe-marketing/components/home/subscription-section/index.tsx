import { RiCheckFill } from '@remixicon/react';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Button } from '@repo/design-system/components/ui/button';
import { Input } from '@repo/design-system/components/ui/input';
import Image from 'next/image';
import { SectionHeader } from '../section-header';

const features = [
  'Exclusive access to new abstract images and collections',
  'Unlock special promotions only for subscribers',
  'Regular doses of artistic inspiration',
];

export const SubscriptionSection = () => {
  return (
    <section className="container py-10">
      <div className="lg:flex lg:items-center">
        <div className="flex-1">
          <SectionHeader
            title="Get the finest curated abstracts delivered weekly to your inbox"
            titleClassname="text-start"
          />
          <ul className="space-y-4 pt-2 pb-10 text-neutral-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <RiCheckFill className="h-6 w-6 flex-shrink-0 flex-grow-0 rounded-full bg-primary/10 p-1 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="md:flex md:gap-4">
            <div className="md:w-1/2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-neutral-50"
              />

              <p className="py-4 text-neutral-600">
                We only send you the best! No spam.
              </p>
            </div>

            <Button className="w-full md:w-fit">Subscribe</Button>
          </div>
        </div>

        <div className="relative w-full py-4 lg:w-2/5">
          <AspectRatio ratio={4 / 3}>
            <Image
              src="/app/abstract.jpg"
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
