import { ContactFormSection } from '@/features/shell/components/contact-form-section';
import { FaqSection } from '@/features/shell/components/faq-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Abstractly',
  description: 'Talk to our team',
};

export default function Page() {
  return (
    <div>
      <ContactFormSection />
      <FaqSection />
    </div>
  );
}
