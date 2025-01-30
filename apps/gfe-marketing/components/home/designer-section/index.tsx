import { DropletIcon, ImageIcon, RainbowIcon } from 'lucide-react';
import Image from 'next/image';

const DesignerSection = () => {
  const features = [
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: '5K resolution support',
      description:
        'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
    },
    {
      icon: <DropletIcon className="h-6 w-6" />,
      title: 'From water to glass',
      description:
        'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
    },
    {
      icon: <RainbowIcon className="h-6 w-6" />,
      title: 'Portrait or landscape',
      description:
        "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
    },
  ];

  return (
    <section className="px-6 py-12 md:px-12 lg:px-24">
      <h2 className="mb-4 text-center font-semibold text-3xl text-neutral-900 md:text-4xl">
        For designers, by designers
      </h2>
      <p className="mb-6 text-center text-neutral-600 text-xl">
        Unleash boundless creativity with a large repository of images optimized
        for designers
      </p>
      <div className="container mx-auto lg:flex lg:flex-row-reverse flex-col items-center">
        <div>
          <div className="h-64 w-full rounded-lg bg-gray-200 md:h-96">
            {/* Placeholder for the image */}
            <Image
              src="/app/glass.jpg"
              alt="Designer-focused abstract art"
              className="h-full w-full rounded-lg object-cover"
              width={500}
              height={400}
            />
          </div>
        </div>
        <div className="mb-8">
          {features.map((feature) => {
            return (
              <div key={feature.title} className="mb-10">
                <div className="flex items-start">
                  <div className="w-fit rounded-full p-3 text-primary shadow">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <div className="text-md text-neutral-600">
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

export default DesignerSection;
