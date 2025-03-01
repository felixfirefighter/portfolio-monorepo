import { BestInClassSection } from '@/components/best-in-class-section';
import { ContactFormSection } from '@/components/contact-form-section';
import { DesignerSection } from '@/components/designer-section';
import { FaqSection } from '@/components/faq-section';
import { FeatureSection } from '@/components/feature-section';
import { HeroSection } from '@/features/features/components/hero-section';
import { TestimonialsSection } from '@/features/features/components/testimonials-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - Abstractly',
  description: 'Premium abstract images',
};

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
