'use client';

import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { CheckIcon } from 'lucide-react';
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
      'Access to all stock images, including high-quality assets',
      'Commercial and resale rights',
      'Dedicated customer support',
      'Priority support with live chat',
      'Advanced analytics and reporting',
    ],
  },
];

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="container py-12">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingData.map((plan) => (
          <Card
            key={plan.name}
            className={`${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="-translate-x-1/2 absolute top-0 left-1/2 rounded-b-lg bg-blue-500 px-4 py-1 font-bold text-white text-xs">
                Most Popular
              </div>
            )}
            <CardHeader className="p-4">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-md">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 py-2">
              <div className="flex items-end">
                <p className="font-medium text-4xl">
                  ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </p>
                <p className="text-md">/{isAnnual ? 'year' : 'month'}</p>
              </div>
              <p className="text-neutral-600">
                Billed {isAnnual ? 'yearly' : 'monthly'}
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex space-x-2">
                    <CheckIcon className="h-6 w-6 rounded-full bg-primary/10 p-1 text-primary" />{' '}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full">Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
