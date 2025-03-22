import { NewsSection } from '@/features/shell/components/news-section';
import { SectionHeader } from '@/features/shell/components/section-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs - Hacker News',
  description:
    'Connect with top tech job opportunities and company hiring posts.',
};

export default function Page() {
  return (
    <div>
      <SectionHeader
        title="Jobs"
        description="Connect with top tech job opportunities and company hiring posts."
      />
      <NewsSection category="job" />
    </div>
  );
}
