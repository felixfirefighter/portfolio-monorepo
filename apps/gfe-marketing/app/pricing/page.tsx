import { FeatureSection } from '@/features/app/components/feature-section';
import { TestimonialsSection } from '@/features/features/components/testimonials-section';
import { ContactFormSection } from '@/features/home/components/contact-form-section';
import { FaqSection } from '@/features/home/components/faq-section';
import { PricingSection } from '@/features/home/components/pricing-section';

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
