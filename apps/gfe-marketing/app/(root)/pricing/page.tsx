import { ContactFormSection } from '@/components/contact-form-section';
import { FaqSection } from '@/components/faq-section';
import { FeatureSection } from '@/components/feature-section';
import { PricingSection } from '@/components/pricing-section';
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
