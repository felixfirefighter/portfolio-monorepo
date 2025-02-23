import {
  RiBrushLine,
  RiCopyrightLine,
  RiDownload2Line,
  RiMoneyDollarCircleLine,
  RiRefreshLine,
  RiTeamLine,
} from '@remixicon/react';
import { SectionHeader } from '../section-header';

const features = [
  {
    icon: <RiDownload2Line className="h-6 w-6" />,
    title: 'Infinite Download',
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    icon: <RiBrushLine className="h-6 w-6" />,
    title: 'Purely Handcrafted',
    description:
      ' No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
  },
  {
    icon: <RiCopyrightLine className="h-6 w-6" />,
    title: 'All Are Under License',
    description:
      'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).',
  },
  {
    icon: <RiMoneyDollarCircleLine className="h-6 w-6" />,
    title: 'Cancel Anytime',
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    icon: <RiTeamLine className="h-6 w-6" />,
    title: 'Empowering for Team',
    description:
      'We support multiple seats at once, requiring only a single payment.',
  },
  {
    icon: <RiRefreshLine className="h-6 w-6" />,
    title: 'No Limitations',
    description:
      'Use as many as you want, from Dribbble presentations to PowerPoint presentations.',
  },
];

export const FeatureSection = () => {
  return (
    <section className="container py-10 lg:py-20" id="feature-section">
      <SectionHeader
        header="Premium abstract images"
        title="Easy access to top quality images"
        description="In a world where storytelling constantly evolves, we lead with
          groundbreaking images designed for your presentation excellence."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:pt-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center rounded-lg bg-white text-center"
          >
            <div className="rounded-full p-3 text-primary shadow">
              {feature.icon}
            </div>
            <h3 className="mt-4 mb-2 font-semibold text-neutral-900 text-xl">
              {feature.title}
            </h3>
            <p className="text-neutral-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
