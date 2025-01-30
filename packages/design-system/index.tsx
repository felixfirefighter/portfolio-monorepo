import type { ThemeProviderProps } from 'next-themes';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './providers/theme';

type DesignSystemProviderProperties = ThemeProviderProps;

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    {/* <AuthProvider> */}
    {/* <AnalyticsProvider> */}
    <TooltipProvider>{children}</TooltipProvider>
    {/* <Toaster /> */}
    {/* </AnalyticsProvider> */}
    {/* </AuthProvider> */}
  </ThemeProvider>
);
