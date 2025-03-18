import { SectionHeader } from '@/features/shell/components/section-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New - Hacker News',
  description: 'The latest news from the tech industry',
};

export default function Home() {
  return (
    <div>
      <SectionHeader
        title="New"
        description="Discover the latest submissions in the Hacker News community."
      />
    </div>
  );
}
