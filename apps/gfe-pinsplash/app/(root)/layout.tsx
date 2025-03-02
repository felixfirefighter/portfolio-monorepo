'use client';

import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import { Footer } from '@/features/shell/components/footer';
import Navbar from '@/features/shell/components/navbar';
import { store } from '@/features/shell/store';
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
        <DesignSystemProvider enableSystem={false} defaultTheme="light">
          <Provider store={store}>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </Provider>
        </DesignSystemProvider>
      </body>
    </html>
  );
};

export default RootLayout;
