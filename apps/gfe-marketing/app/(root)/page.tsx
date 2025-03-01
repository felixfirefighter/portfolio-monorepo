import { BestInClassSection } from '@/components/best-in-class-section';
import { ContactFormSection } from '@/components/contact-form-section';
import { DesignerSection } from '@/components/designer-section';
import { FaqSection } from '@/components/faq-section';
import { FeatureSection } from '@/components/feature-section';
import { PricingSection } from '@/components/pricing-section';
import { CompanySection } from '@/features/home/components/company-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { SubscriptionSection } from '@/features/home/components/subscription-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Abstractly',
  description: 'Well crafted abstract images',
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanySection />
      <FeatureSection />
      <DesignerSection />
      <BestInClassSection />
      <PricingSection />
      <FaqSection />
      <SubscriptionSection />
      <ContactFormSection />
    </div>
  );
}
