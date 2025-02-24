import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Abstractly',
  description: 'Well crafted abstract images',
};

export default function Home() {
  return <div className="container">Hello Pinsplash</div>;
}
