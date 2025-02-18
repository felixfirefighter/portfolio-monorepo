import { BestInClassSection } from '@/features/app/components/best-in-class-section';
import { DesignerSection } from '@/features/app/components/designer-section';
import { FeatureSection } from '@/features/app/components/feature-section';
import { CompanySection } from '@/features/home/components/company-section';
import { ContactFormSection } from '@/features/home/components/contact-form-section';
import { FaqSection } from '@/features/home/components/faq-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { PricingSection } from '@/features/home/components/pricing-section';
import { SubscriptionSection } from '@/features/home/components/subscription-section';

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
