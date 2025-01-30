import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import Navbar from '@/components/app/navbar';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body className="bg-gray-50">
      <DesignSystemProvider
        themes={['red']}
        enableSystem={false}
        defaultTheme="light"
      >
        <Navbar />
        <main className="mx-4 bg-white">{children}</main>
      </DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
