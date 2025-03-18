import { SectionHeader } from '@/features/shell/components/section-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Show - Hacker News',
  description:
    'Showcase your projects, products, and discoveries to the Hacker News audience.',
};

export default function Page() {
  return (
    <div>
      <SectionHeader
        title="Show"
        description="Showcase your projects, products, and discoveries to the Hacker News audience."
      />
    </div>
  );
}
