import { BestInClassSection } from '@/features/app/components/best-in-class-section';
import { ContactFormSection } from '@/features/app/components/contact-form-section';
import { DesignerSection } from '@/features/app/components/designer-section';
import { FaqSection } from '@/features/app/components/faq-section';
import { FeatureSection } from '@/features/app/components/feature-section';
import { PricingSection } from '@/features/app/components/pricing-section';
import { CompanySection } from '@/features/home/components/company-section';
import { HeroSection } from '@/features/home/components/hero-section';
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
