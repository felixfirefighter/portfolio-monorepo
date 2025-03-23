import { NewsItemDetails } from '@/features/shell/components/news-item-details';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Details - Hacker News',
  description:
    'Hacker News is a community-driven news website that allows users to submit links and create discussions around them.',
};

export default function Page() {
  return (
    <div>
      <NewsItemDetails />
    </div>
  );
}
