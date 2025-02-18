import { BestInClassSection } from '@/features/app/components/best-in-class-section';
import { DesignerSection } from '@/features/app/components/designer-section';
import { FeatureSection } from '@/features/app/components/feature-section';
import { HeroSection } from '@/features/features/components/hero-section';
import { TestimonialsSection } from '@/features/features/components/testimonials-section';
import { ContactFormSection } from '@/features/home/components/contact-form-section';
import { FaqSection } from '@/features/home/components/faq-section';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <DesignerSection />
      <BestInClassSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactFormSection />
    </div>
  );
}
