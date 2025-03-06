import { TopicHeader } from '@/features/topics/components/topic-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Topic - Pinsplash',
  description: 'Topic page',
};

export default function Page() {
  return (
    <>
      <TopicHeader />
    </>
  );
}
