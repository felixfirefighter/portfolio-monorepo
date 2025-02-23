'use client';

import type { CookieConsentProps } from '@/features/app/models/cookie-consent';
import { Button } from '@repo/design-system/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CookieConsentDialog } from '../cookie-consent-dialog';

const COOKIE_KEY = 'user_cookie_consent';

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState<CookieConsentProps>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_KEY);
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (updatedConsent: CookieConsentProps) => {
    setConsent(updatedConsent);
    localStorage.setItem(COOKIE_KEY, JSON.stringify(updatedConsent));
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 flex w-full flex-col items-center justify-between border-t bg-white py-4 md:py-6">
      <div className="container">
        <div className="mb-6">
          <p className="mb-1 font-semibold">We use cookies</p>
          <p className="text-neutral-600 text-sm">
            We use cookies to enhance your browsing experience and improve our
            website's performance. By continuing to use this site, you consent
            to the use of cookies. To learn more about how we use cookies and
            your options, please read our{' '}
            <Link href="/" target="_blank" className="text-primary">
              cookie policy
            </Link>
            .
          </p>
        </div>
        {/* Mobile view */}
        <div className="flex w-full flex-col gap-2 md:hidden">
          <Button
            className="w-full"
            onClick={() => saveConsent({ analytics: true, marketing: true })}
          >
            Allow cookies
          </Button>
          <CookieConsentDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            saveConsent={saveConsent}
            setConsent={(key, value) =>
              setConsent((prev) => {
                return {
                  ...prev,
                  [key]: value,
                };
              })
            }
            consent={consent}
          />

          <Button
            className="w-full"
            variant="destructive"
            onClick={() => saveConsent({ analytics: false, marketing: false })}
          >
            Decline all
          </Button>
        </div>

        {/* Desktop view */}
        <div className="hidden w-full gap-2 md:flex md:justify-between">
          <Button
            variant="destructive"
            onClick={() => saveConsent({ analytics: false, marketing: false })}
          >
            Decline all
          </Button>

          <div className="flex gap-4">
            <Button
              onClick={() => saveConsent({ analytics: true, marketing: true })}
            >
              Allow cookies
            </Button>
            <CookieConsentDialog
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              saveConsent={saveConsent}
              setConsent={(key, value) =>
                setConsent((prev) => {
                  return {
                    ...prev,
                    [key]: value,
                  };
                })
              }
              consent={consent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
