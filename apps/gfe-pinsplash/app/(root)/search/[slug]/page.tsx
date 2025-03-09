import { SearchResultSection } from '@/features/search/search-result-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search - Pinsplash',
  description: 'Search page',
};

export default function Page() {
  return (
    <>
      <SearchResultSection />
    </>
  );
}
