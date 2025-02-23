import { BestInClassSection } from '@/features/app/components/best-in-class-section';
import { ContactFormSection } from '@/features/app/components/contact-form-section';
import { DesignerSection } from '@/features/app/components/designer-section';
import { FaqSection } from '@/features/app/components/faq-section';
import { FeatureSection } from '@/features/app/components/feature-section';
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
