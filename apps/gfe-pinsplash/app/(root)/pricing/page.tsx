import { ContactFormSection } from '@/features/app/components/contact-form-section';
import { FaqSection } from '@/features/app/components/faq-section';
import { FeatureSection } from '@/features/app/components/feature-section';
import { PricingSection } from '@/features/app/components/pricing-section';
import { TestimonialsSection } from '@/features/features/components/testimonials-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Abstractly',
  description: 'Fit for all your needs',
};

export default function Page() {
  return (
    <div>
      <PricingSection />
      <FaqSection />
      <FeatureSection />
      <TestimonialsSection />
      <ContactFormSection />
    </div>
  );
}
