import { CompanySection } from '@/features/home/components/company-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { SubscriptionSection } from '@/features/home/components/subscription-section';
import { BestInClassSection } from '@/features/shell/components/best-in-class-section';
import { ContactFormSection } from '@/features/shell/components/contact-form-section';
import { DesignerSection } from '@/features/shell/components/designer-section';
import { FaqSection } from '@/features/shell/components/faq-section';
import { FeatureSection } from '@/features/shell/components/feature-section';
import { PricingSection } from '@/features/shell/components/pricing-section';
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
