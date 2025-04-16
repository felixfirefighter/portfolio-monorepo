import {
  RiColorFilterLine,
  RiHandHeartLine,
  RiInfinityLine,
  RiLeafLine,
  RiPaintLine,
  RiPriceTag2Line,
  RiRainbowLine,
  RiRecycleLine,
  RiScales2Line,
  RiShapesLine,
  RiShieldStarLine,
  RiShirtLine,
  RiStackLine,
  RiTShirtLine,
  RiWaterFlashLine,
  RiWindyLine,
} from '@remixicon/react';

interface Feature {
  icon: React.ElementType;
  text: string;
}

interface TabInfo {
  value: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
  features: Feature[];
}

export const TABS: TabInfo[] = [
  {
    value: 'sustainability',
    title: 'Sustainability',
    imageSrc: '/products/yellow-desktop.jpg',
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
    imageSrc: '/products/black-desktop.jpg',
    imageAlt: 'Close up of soft fabric',
    heading: 'Unparalleled Comfort',
    description:
      'Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.',
    features: [
      { icon: RiTShirtLine, text: 'Ergonomic Fits' },
      { icon: RiHandHeartLine, text: 'Soft-to-the-Touch Fabrics' },
      { icon: RiWindyLine, text: 'Breathable Weaves' },
      { icon: RiColorFilterLine, text: 'Thoughtful Design' },
    ],
  },
  {
    value: 'durability',
    title: 'Durability',
    imageSrc: '/products/chair-desktop.jpg',
    imageAlt: 'Stack of clothes on a white chair',
    heading: 'Built to Last',
    description:
      "Here's to apparel that you can trust to look as good as new, wear after wear,year after year.",
    features: [
      { icon: RiStackLine, text: 'Reinforced Construction' },
      { icon: RiScales2Line, text: 'Quality Control' },
      { icon: RiShieldStarLine, text: 'Material Resilience' },
      { icon: RiPriceTag2Line, text: 'Warranty and Repair' },
    ],
  },
  {
    value: 'versatility',
    title: 'Versatility',
    imageSrc: '/products/clothes-desktop.jpg',
    imageAlt: 'Clothes hanging',
    heading: 'Versatile by Design',
    description:
      'Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch.',
    features: [
      { icon: RiRainbowLine, text: 'Adaptive Styles' },
      { icon: RiShirtLine, text: 'Functional Fashion' },
      { icon: RiInfinityLine, text: 'Timeless Aesthetics' },
      { icon: RiShapesLine, text: 'Mix-and-Match Potential' },
    ],
  },
  // Add more tab objects here as needed
];
