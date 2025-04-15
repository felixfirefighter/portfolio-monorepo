import {
  RiHandHeartLine,
  RiLeafLine,
  RiPaintLine,
  RiRecycleLine,
  RiScales2Line,
  RiShieldStarLine,
  RiStackLine,
  RiTShirtLine,
  RiWaterFlashLine,
  RiWindyLine,
} from '@remixicon/react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/design-system/components/ui/tabs';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';

// Define the structure for tab data
interface Feature {
  icon: React.ElementType;
  text: string;
}

interface TabInfo {
  value: string;
  title: string;
  imageSrc: string; // Placeholder path or URL
  imageAlt: string;
  heading: string;
  description: string;
  features: Feature[];
}

// Data for the tabs - easy to add more tabs here
const eleganceTabs: TabInfo[] = [
  {
    value: 'sustainability',
    title: 'Sustainability',
    imageSrc: '/placeholder-image.svg', // Replace with your placeholder path or URL
    imageAlt: 'Woman wearing a yellow turtleneck sweater',
    heading: 'Eco-Friendly Choice',
    description:
      'With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.',
    features: [
      { icon: RiRecycleLine, text: 'Recycled Materials' },
      { icon: RiPaintLine, text: 'Low Impact Dye' },
      { icon: RiLeafLine, text: 'Carbon Neutral' },
      { icon: RiWaterFlashLine, text: 'Water Conservation' },
    ],
  },
  {
    value: 'comfort',
    title: 'Comfort',
    imageSrc: '/placeholder-image-2.svg', // Different placeholder for variety
    imageAlt: 'Close up of soft fabric',
    heading: 'Unparalleled Comfort',
    description:
      'Experience clothing designed for ultimate comfort, using breathable and soft materials perfect for everyday wear.',
    features: [
      { icon: RiTShirtLine, text: 'Soft Touch Fabrics' },
      { icon: RiHandHeartLine, text: 'Breathable Weave' },
      { icon: RiWindyLine, text: 'Naturally Sourced' }, // Re-using an icon for example
    ],
  },
  {
    value: 'durability',
    title: 'Durability',
    imageSrc: '/placeholder-image-3.svg', // Another placeholder
    imageAlt: 'Detailed view of strong stitching',
    heading: 'Built to Last',
    description:
      'Our garments are crafted with meticulous attention to detail and high-quality materials, ensuring they stand the test of time.',
    features: [
      { icon: RiStackLine, text: 'Reinforced Seams' }, // Re-using icons
      { icon: RiScales2Line, text: 'Fade Resistant Colors' },
      { icon: RiShieldStarLine, text: 'Easy Care Instructions' },
    ],
  },
  // Add more tab objects here as needed
];

export const ProductSpecSection = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-sm md:p-6">
      {' '}
      {/* Adjust max-width as needed */}
      <h1 className="mb-3 font-bold text-2xl text-gray-800 md:text-3xl">
        Discover timeless elegance
      </h1>
      <p className="mb-6 text-gray-600 text-sm md:text-base">
        Step into a world where quality meets quintessential charm with our
        collection. Every thread weaves a promise of unparalleled quality,
        ensuring that each garment is not just a part of your wardrobe, but a
        piece of art. Here's the essence of what makes our apparel the hallmark
        for those with an eye for excellence and a heart for the environment.
      </p>
      <Tabs
        defaultValue={eleganceTabs[0]?.value || 'sustainability'}
        className="w-full"
      >
        {/* TabsList with horizontal scrolling */}
        <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mb-4 overflow-x-auto pb-2">
          {' '}
          {/* Basic scrollbar styling */}
          <TabsList className="inline-flex w-max space-x-1 bg-transparent p-0">
            {' '}
            {/* Ensure list doesn't wrap and uses available space */}
            {eleganceTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  'whitespace-nowrap px-4 py-2 font-medium text-gray-500 text-sm',
                  'border-transparent border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:font-semibold data-[state=active]:text-indigo-700',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', // Focus styles
                  'hover:text-gray-700' // Hover effect
                )}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab Content */}
        {eleganceTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-4">
            <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden rounded bg-gray-200">
              {/* Using Next/Image or a simple img tag for placeholder */}
              <Image
                src={tab.imageSrc}
                alt={tab.imageAlt}
                width={400} // Adjust dimensions as needed
                height={225}
                className="h-full w-full object-cover"
                // Basic placeholder style if image fails to load or during loading
                style={{ backgroundColor: '#e5e7eb' }} // gray-200
              />
              {/* Or a simple div placeholder: */}
              {/* <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">Placeholder</div> */}
            </div>
            <h2 className="mb-2 font-semibold text-gray-800 text-xl">
              {tab.heading}
            </h2>
            <p className="mb-5 text-gray-600 text-sm md:text-base">
              {tab.description}
            </p>
            <ul className="list-none space-y-3 p-0">
              {tab.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 text-sm"
                >
                  <feature.icon className="h-5 w-5 flex-shrink-0 text-indigo-600" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
