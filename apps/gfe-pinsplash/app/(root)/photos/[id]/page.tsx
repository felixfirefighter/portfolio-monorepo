import { PhotoDetailsSection } from '@/features/photos/photo-details-section';
import { RelatedPhotosSection } from '@/features/photos/related-photos-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo - Pinsplash',
  description: 'Photo',
};

export default function Page() {
  return (
    <>
      <PhotoDetailsSection />
      <RelatedPhotosSection />
    </>
  );
}
