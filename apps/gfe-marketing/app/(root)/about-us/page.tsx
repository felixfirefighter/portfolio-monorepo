import { HeroSection } from '@/features/about-us/components/hero-section';
import { StatisticsSection } from '@/features/about-us/components/statistics-section';
import { TeamSection } from '@/features/about-us/components/team-section';
import { ContactFormSection } from '@/features/app/components/contact-form-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Abstractly',
  description: 'From a tiny desk to the entire world',
};

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
