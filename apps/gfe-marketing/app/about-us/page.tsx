import { HeroSection } from '@/features/about-us/components/hero-section';
import { StatisticsSection } from '@/features/about-us/components/statistics-section';
import { TeamSection } from '@/features/about-us/components/team-section';
import { ContactFormSection } from '@/features/home/components/contact-form-section';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <TeamSection />
      <ContactFormSection />
    </div>
  );
}
