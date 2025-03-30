'use client';

import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import { Footer } from '@/features/shell/components/footer';
import Navbar from '@/features/shell/components/navbar';
import { store } from '@/features/store';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body>
        <Provider store={store}>
          <DesignSystemProvider enableSystem={false} defaultTheme="light">
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </DesignSystemProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
