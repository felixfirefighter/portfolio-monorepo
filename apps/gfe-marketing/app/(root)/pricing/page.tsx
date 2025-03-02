import { TestimonialsSection } from '@/features/features/components/testimonials-section';
import { ContactFormSection } from '@/features/shell/components/contact-form-section';
import { FaqSection } from '@/features/shell/components/faq-section';
import { FeatureSection } from '@/features/shell/components/feature-section';
import { PricingSection } from '@/features/shell/components/pricing-section';
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
