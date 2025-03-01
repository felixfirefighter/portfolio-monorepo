import { ContactFormSection } from '@/components/contact-form-section';
import { FaqSection } from '@/components/faq-section';
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
