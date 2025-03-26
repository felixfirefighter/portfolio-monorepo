import { SectionHeader } from '@/features/shell/components/section-header';
import {
  RiExchangeLine,
  RiShieldCheckLine,
  RiTruckLine,
} from '@remixicon/react';

const features = [
  {
    icon: <RiTruckLine className="h-6 w-6" />,
    title: 'Complimentary Shipping',
    description:
      'Enjoy the convenience of free shipping for all orders. We believe in transparent pricing, and the price you see is the price you pay—no surprise fees',
  },
  {
    icon: <RiShieldCheckLine className="h-6 w-6" />,
    title: '2-Year Quality Promise',
    description:
      "Shop with confidence knowing that we stand behind our products. Should any issue arise within the first two years, rest assured we're here to help with a hassle-free replacement.",
  },
  {
    icon: <RiExchangeLine className="h-6 w-6" />,
    title: 'Easy Exchanges',
    description:
      "If your purchase isn't quite right, pass it on to a friend who might love it, and let us know. We're happy to facilitate an exchange to ensure you have the perfect item to complement your lifestyle.",
  },
];

export const FeatureSection = () => {
  return (
    <section className="container py-10 lg:py-20" id="feature-section">
      <SectionHeader
        header="Elevate Your Experience"
        title="Our Commitment to Exceptional Service"
        description="We pride ourselves on a foundation of exceptional customer service, where every interaction is a testament to our dedication to excellence."
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
