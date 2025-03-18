import '@repo/design-system/styles/globals.css';
import '@/styles/web.css';
import { Footer } from '@/features/shell/components/footer';
import Navbar from '@/features/shell/components/navbar';
import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import type { ReactNode } from 'react';

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
      <body className="pt-16 md:pt-0 lg:pl-60">
        <DesignSystemProvider
          enableSystem={false}
          themes={['light', 'orange']}
          defaultTheme="orange"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </DesignSystemProvider>
      </body>
    </html>
  );
};

export default RootLayout;
