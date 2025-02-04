import { RiHdLine, RiRainbowLine, RiWaterPercentLine } from '@remixicon/react';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import Image from 'next/image';
import { SectionHeader } from '../section-header';

const features = [
  {
    icon: <RiHdLine className="h-6 w-6" />,
    title: '5K resolution support',
    description:
      'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
  },
  {
    icon: <RiWaterPercentLine className="h-6 w-6" />,
    title: 'From water to glass',
    description:
      'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
  },
  {
    icon: <RiRainbowLine className="h-6 w-6" />,
    title: 'Portrait or landscape',
    description:
      "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
  },
];

const DesignerSection = () => {
  return (
    <section className="container py-10">
      <SectionHeader
        header="Premium abstract images"
        title="For designers, by designers"
        description="Unleash boundless creativity with a large repository of images
          optimized for designers"
      />
      <div className="flex-col items-center lg:flex lg:flex-row">
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
        <div className="w-full rounded-lg">
          <AspectRatio ratio={2}>
            <Image
              src="/app/glass.jpg"
              alt="Designer-focused abstract art"
              className="h-full w-full rounded-lg object-cover"
              width={500}
              height={400}
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;
