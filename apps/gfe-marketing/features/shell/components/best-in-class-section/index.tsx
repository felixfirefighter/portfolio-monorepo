import { SectionHeader } from '@/features/shell/components/section-header';
import { RiCopyrightLine, RiP2pLine, RiRocket2Line } from '@remixicon/react';
import Image from 'next/image';

const features = [
  {
    icon: <RiRocket2Line className="h-6 w-6" />,
    title: 'Faster downloads',
    description:
      'Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.',
  },
  {
    icon: <RiP2pLine className="h-6 w-6" />,
    title: 'Convenience for teams',
    description:
      'Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.',
  },
  {
    icon: <RiCopyrightLine className="h-6 w-6" />,
    title: 'Royalty-free licensing',
    description:
      'Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.',
  },
];

export const BestInClassSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <SectionHeader
        header="Best-in-class support"
        title="Convenience and licensing that empowers"
        description="In a world where storytelling constantly evolves, don't let licensing
          and poor support hold you down."
      />
      <div className="items-center lg:flex lg:gap-8 lg:pt-8">
        <Image
          src="/app/cube.jpg"
          alt="Cube"
          className="aspect-[2] w-full rounded-lg object-cover lg:aspect-[1] xl:aspect-[1.5]"
          width={576}
          height={1024}
        />
        <div className="mt-6 space-y-4">
          {features.map((feature) => {
            return (
              <div key={feature.title} className="mb-8">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex-grow-0 rounded-full p-3 text-primary shadow">
                    {feature.icon}
                  </div>
                  <div className="py-2">
                    <h3 className="mb-2 font-semibold text-lg">
                      {feature.title}
                    </h3>
                    <div className="text-neutral-600">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
