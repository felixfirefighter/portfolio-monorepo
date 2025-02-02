import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import {} from '@repo/design-system/components/ui/card';
import { CopyrightIcon, RocketIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';

export const BestInClassSection = () => {
  const features = [
    {
      icon: <RocketIcon className="h-6 w-6" />,
      title: 'Faster downloads',
      description:
        'Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience.',
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: 'Convenience for teams',
      description:
        'Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.',
    },
    {
      icon: <CopyrightIcon className="h-6 w-6" />,
      title: 'Royalty-free licensing',
      description:
        'Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.',
    },
  ];

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <div className="text-center">
        <h3 className="mb-3 font-semibold text-primary">
          Best-in-class support
        </h3>
        <h2 className="mb-4 text-center font-semibold text-3xl text-neutral-900 md:text-4xl">
          Convenience and licensing that empowers
        </h2>
        <p className="mb-6 text-center text-lg text-neutral-600">
          In a world where storytelling constantly evolves, don't let licensing
          and poor support hold you down.
        </p>
      </div>
      <div className="w-full rounded-lg">
        <AspectRatio ratio={2}>
          <Image
            src="/app/cube.jpg"
            alt="Cube"
            className="h-full w-full rounded-lg object-cover"
            width={500}
            height={250}
          />
        </AspectRatio>
      </div>
      <div className="mt-6 space-y-4">
        {features.map((feature) => {
          return (
            <div key={feature.title} className="mb-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 flex-grow-0 rounded-full p-3 text-primary shadow">
                  {feature.icon}
                </div>
                <div className="py-2">
                  <h4 className="mb-2 font-semibold text-lg">
                    {feature.title}
                  </h4>
                  <div className="text-neutral-600">{feature.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
