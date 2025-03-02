import { HeroSection } from '@/features/features/components/hero-section';
import { TestimonialsSection } from '@/features/features/components/testimonials-section';
import { BestInClassSection } from '@/features/shell/components/best-in-class-section';
import { ContactFormSection } from '@/features/shell/components/contact-form-section';
import { DesignerSection } from '@/features/shell/components/designer-section';
import { FaqSection } from '@/features/shell/components/faq-section';
import { FeatureSection } from '@/features/shell/components/feature-section';
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
