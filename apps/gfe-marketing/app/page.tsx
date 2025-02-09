import { BestInClassSection } from '@/components/home/best-in-class-section';
import CompanySection from '@/components/home/company-section';
import DesignerSection from '@/components/home/designer-section';
import { FaqSection } from '@/components/home/faq-section';
import FeatureSection from '@/components/home/feature-section';
import HomeSection from '@/components/home/hero-section';
import { PricingSection } from '@/components/home/pricing-section';
import { SubscriptionSection } from '@/components/home/subscription-section';

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
    </div>
  );
}
