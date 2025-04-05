import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="container py-10 lg:py-20 xl:flex xl:items-center xl:gap-12">
      <div className="xl:flex-[2]">
        <h2 className="mb-4 font-bold text-4xl text-neutral-900 md:text-5xl xl:text-6xl">
          Summer styles are finally here
        </h2>
        <p className="mb-8 text-lg text-neutral-600 xl:text-xl">
          This year, our new summer collection will be your haven from the
          world's harsh elements.
        </p>
        <Button size={'lg'} className="mb-8">
          Shop now
        </Button>
      </div>
      <div className="rounded-xl xl:flex-[3]">
        <Image
          src="/app/hero-1.png"
          alt="Shopping scene"
          width={696}
          height={526}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};
