import { MasonryImageSection } from '@/features/home/components/masonry-image-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Pinsplash',
  description: 'Images at your fingertip',
};

export default function Home() {
  return (
    <>
      <MasonryImageSection />
    </>
  );
}
