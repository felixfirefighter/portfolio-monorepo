import { BestInClassSection } from '@/features/home/components/best-in-class-section';
import CompanySection from '@/features/home/components/company-section';
import { ContactFormSection } from '@/features/home/components/contact-form-section';
import DesignerSection from '@/features/home/components/designer-section';
import { FaqSection } from '@/features/home/components/faq-section';
import FeatureSection from '@/features/home/components/feature-section';
import HomeSection from '@/features/home/components/hero-section';
import { PricingSection } from '@/features/home/components/pricing-section';
import { SubscriptionSection } from '@/features/home/components/subscription-section';

export default function Home() {
  return (
    <div>
      <HomeSection />
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
