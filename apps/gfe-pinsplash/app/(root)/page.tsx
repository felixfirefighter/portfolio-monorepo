import { ImageListContainer } from '@/features/home/components/image-list-container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Pinsplash',
  description: 'Images at your fingertip',
};

export default function Home() {
  return (
    <>
      <ImageListContainer />
    </>
  );
}
