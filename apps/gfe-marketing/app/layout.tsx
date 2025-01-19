import '@repo/design-system/styles/globals.css';
import Navbar from '@/features/shell/navbar';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import type { ReactNode } from 'react';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <DesignSystemProvider enableSystem={false} defaultTheme="light">
        <Navbar />
        <main>{children}</main>
      </DesignSystemProvider>
    </body>
  </html>
);

export default RootLayout;
