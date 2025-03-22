import { NewsSection } from '@/features/shell/components/news-section';
import { SectionHeader } from '@/features/shell/components/section-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask - Hacker News',
  description:
    'Explore community-driven Q&A where users seek insights and advice.',
};

export default function Page() {
  return (
    <div>
      <SectionHeader
        title="Ask"
        description="Explore community-driven Q&A where users seek insights and advice."
      />
      <NewsSection category="ask" />
    </div>
  );
}
