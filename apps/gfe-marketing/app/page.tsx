import CompanySection from '@/components/home/company-section';
import DesignerSection from '@/components/home/designer-section';
import FeatureSection from '@/components/home/feature-section';
import HomeSection from '@/components/home/hero-section';

export default function Home() {
  return (
    <div>
      <HomeSection />
      <CompanySection />
      <FeatureSection />
      <DesignerSection />
    </div>
  );
}
