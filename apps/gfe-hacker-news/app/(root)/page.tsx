import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Hacker News',
  description: 'The latest news from the tech industry',
};

export default function Home() {
  return <div>Hacker News</div>;
}
