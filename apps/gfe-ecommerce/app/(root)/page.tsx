import { CollectionsSection } from '@/features/home/components/collections-section';
import { FeatureSection } from '@/features/home/components/feature-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { ProductsSection } from '@/features/home/components/products-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Ecommerce',
  description: 'Your one stop shop for all your ecommerce needs',
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <CollectionsSection />
      <FeatureSection />
    </div>
  );
}
