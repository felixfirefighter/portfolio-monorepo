'use client';

import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import TopicsSection from '@/features/home/components/topics-section';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <>
      <TopicsSection />
      {children}
    </>
  );
};

export default RootLayout;
