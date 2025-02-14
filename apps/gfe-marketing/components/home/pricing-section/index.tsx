'use client';

import { RiCheckLine } from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { cn } from '@repo/design-system/lib/utils';
import { useState } from 'react';
import { SectionHeader } from '../section-header';

const pricingData = [
  {
    name: 'Basic Plan',
    description: 'Access to a curated selection of abstract images',
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    features: [
      'Standard quality images',
      'Limited to personal use',
      'Email support',
    ],
  },
  {
    name: 'Standard Plan',
    description: 'Next-level Integrations, priced economically',
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    features: [
      'Expanded library with more stock images',
      'High-resolution images available',
      'Suitable for commercial use',
      'Priority email support',
      'Advanced analytics',
    ],
    popular: true,
  },
  {
    name: 'Premium Plan',
    description: 'Experience limitless living for power users',
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    features: [
      'Full access to the entire image library, including exclusive content',
      'Highest quality images, including premium collections',
      'Commercial and resale rights',
      'Dedicated customer support line',
      '24/7 support response time',
      'Advanced analytics and insights',
    ],
  },
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="container py-10">
      <SectionHeader
        header="Pricing Tiers"
        title="Fit for all your needs"
        description="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
      />

      <div className="flex gap-8 pb-8 text-center">
        <Button
          size="lg"
          className="w-full hover:bg-transparent"
          variant={isAnnual ? 'ghost' : 'outline'}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </Button>
        <Button
          size="lg"
          className="w-full hover:bg-transparent"
          variant={isAnnual ? 'outline' : 'ghost'}
          onClick={() => setIsAnnual(true)}
        >
          Annually
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricingData.map((plan) => (
          <Card
            key={plan.name}
            className={`${plan.popular ? 'border-primary' : ''}`}
          >
            {plan.popular && (
              <div className="rounded-t-md bg-primary/20 px-4 py-4 text-center font-bold text-primary text-xl">
                <p className="opacity-100">Most Popular</p>
              </div>
            )}
            <CardHeader className="p-4">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-md">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 pt-2 pb-4">
              <div
                className={cn('flex items-end', {
                  'text-primary': plan.popular,
                })}
              >
                <p className={'font-medium text-4xl'}>
                  ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </p>
                <p className="text-md">/{isAnnual ? 'year' : 'month'}</p>
              </div>
              <p className="text-neutral-600">Prices in USD</p>

              <ul className="mt-4 space-y-4 text-neutral-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <RiCheckLine className="h-6 w-6 flex-shrink-0 flex-grow-0 rounded-full bg-primary/10 p-1 text-primary" />{' '}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant={plan.popular ? 'default' : 'outline'}
                className="mt-6 w-full"
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
