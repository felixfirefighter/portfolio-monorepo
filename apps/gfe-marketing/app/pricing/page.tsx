import { ContactFormSection } from '@/features/app/components/contact-form-section';
import { FaqSection } from '@/features/app/components/faq-section';
import { FeatureSection } from '@/features/app/components/feature-section';
import { PricingSection } from '@/features/app/components/pricing-section';
import { TestimonialsSection } from '@/features/features/components/testimonials-section';

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
