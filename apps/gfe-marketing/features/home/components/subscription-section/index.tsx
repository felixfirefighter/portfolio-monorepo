import { FeatureListItems } from '@/features/shell/components/feature-list-items';
import { Button } from '@repo/design-system/components/ui/button';
import { Input } from '@repo/design-system/components/ui/input';
import Image from 'next/image';
import { SectionHeader } from '../../../shell/components/section-header';

const features = [
  'Exclusive access to new abstract images and collections',
  'Unlock special promotions only for subscribers',
  'Regular doses of artistic inspiration',
];

export const SubscriptionSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <div className="lg:flex lg:items-center">
        <div className="flex-1">
          <SectionHeader
            title="Get the finest curated abstracts delivered weekly to your inbox"
            titleClassname="text-start"
          />
          <div className="pt-2 pb-10">
            <FeatureListItems items={features} />
          </div>

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

        <div className="relative w-full flex-1 py-4 lg:w-2/5">
          <Image
            src="/app/abstract.jpg"
            alt="Abstract geometric shapes"
            width={588}
            height={608}
            className="aspect-[1.5] w-full rounded-lg object-cover lg:aspect-[1]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
