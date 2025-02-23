import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import { CookieConsent } from '@/features/app/components/cookie-consent';
import { Footer } from '@/features/app/components/footer';
import Navbar from '@/features/app/components/navbar';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body>
        <DesignSystemProvider enableSystem={false} defaultTheme="light">
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <CookieConsent />
        </DesignSystemProvider>
      </body>
    </html>
  );
};

export default RootLayout;
