import { MasonryImageSection } from '@/features/home/components/masonry-image-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Topic - Pinsplash',
  description: 'Topic page',
};

export default function Home() {
  return (
    <>
      <MasonryImageSection />
    </>
  );
}
