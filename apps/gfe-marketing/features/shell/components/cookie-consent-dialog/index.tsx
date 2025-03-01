import type { CookieConsentProps } from '@/features/shell/types/cookie-consent';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/design-system/components/ui/dialog';
import { Switch } from '@repo/design-system/components/ui/switch';
import type {} from 'react';

interface Props {
  consent: CookieConsentProps;
  setConsent: (key: keyof CookieConsentProps, checked: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  saveConsent: (consent: CookieConsentProps) => void;
}

export const CookieConsentDialog: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen, consent, setConsent, saveConsent } = props;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Manage cookies</Button>
      </DialogTrigger>
      <DialogContent className="w-5/6 [&>button]:hidden">
        <DialogHeader className="hidden">
          <DialogTitle className="">Cookie Consent</DialogTitle>
        </DialogHeader>
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Essentials</p>
            <Switch checked={true} disabled={true} />
          </div>
          <p className="text-neutral-600 text-sm">
            These cookies are essential for the proper functioning of our
            services and cannot be disabled.
          </p>
        </div>
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Analytics</p>
            <Switch
              checked={consent.analytics}
              onCheckedChange={(value) => setConsent('analytics', value)}
            />
          </div>
          <p className="text-neutral-600 text-sm">
            These cookies collect information about how you use our services or
            potential errors you encounter. Based on this information we are
            able to improve your experience and react to any issues.
          </p>
        </div>
        <div className="mb-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Marketing</p>
            <Switch
              checked={consent.marketing}
              onCheckedChange={(value) => setConsent('marketing', value)}
            />
          </div>
          <p className="text-neutral-600 text-sm">
            These cookies allow us to show you advertisements relevant to you
            through our advertising partners.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              className="flex-1"
              onClick={() => saveConsent({ analytics: true, marketing: true })}
            >
              Accept all
            </Button>
            <Button
              className="flex-1"
              variant={'outline'}
              onClick={() => saveConsent(consent)}
            >
              Save
            </Button>
          </div>
          <Button
            variant="destructive"
            onClick={() => saveConsent({ analytics: false, marketing: false })}
          >
            Decline all
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
