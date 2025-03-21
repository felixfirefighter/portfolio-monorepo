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
    <html
      lang="en"
      className={fonts}
      suppressHydrationWarning
      data-theme="orange"
    >
      <body>
        <DesignSystemProvider
          enableSystem={false}
          themes={['orange']}
          defaultTheme="orange"
        >
          <Provider store={store}>
            <Navbar />
            <main className="pt-14 md:pt-0 lg:pl-60">{children}</main>
            <div className="lg:pl-60">
              <Footer />
            </div>
          </Provider>
        </DesignSystemProvider>
      </body>
    </html>
  );
};

export default RootLayout;
