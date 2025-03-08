'use client';

import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import { TopicsListSection } from '@/features/shell/components/topics-list-section';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <>
      <TopicsListSection />
      {children}
    </>
  );
};

export default RootLayout;
