import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/design-system/components/ui/accordion';
import { Button } from '@repo/design-system/components/ui/button';
import Link from 'next/link';
import { SectionHeader } from '../../../app/components/section-header';

const faqs = [
  {
    question: 'What types of images are available on your platform?',
    answer:
      'Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.',
  },
  {
    question: 'How can I access and download images from your platform?',
    answer:
      'Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.',
  },
  {
    question: 'Do you offer free images, or is there a subscription required?',
    answer:
      'We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.',
  },
  {
    question: 'What payment methods do you accept for subscriptions?',
    answer:
      'We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.',
  },
  {
    question: 'Can I cancel or modify my subscription at any time?',
    answer:
      'Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.',
  },
  {
    question: 'How frequently do you update your image collection?',
    answer:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

export const FaqSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <SectionHeader
        title="Frequently asked questions"
        description="Choose any questions you need"
      />
      <Accordion type="multiple" className="mb-4 lg:pt-8">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={`faq-${faq.question}`}>
            <AccordionTrigger className="font-medium text-lg hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-neutral-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="rounded-lg p-8 shadow">
        <div className="gap-4 md:flex md:items-center">
          <div className="md:flex-grow">
            <h3 className="mb-2 font-semibold text-xl">
              Can’t find the answer you’re looking for?
            </h3>
            <div className="p-0 pb-4 md:pb-0">
              <p className="text-neutral-600">
                Reach out to our{' '}
                <Link
                  href="/"
                  className="text-primary underline"
                  aria-label="Go to customer support"
                >
                  customer support
                </Link>{' '}
                team.
              </p>
            </div>
          </div>
          <div className="p-0">
            <Button className="w-full" size={'lg'}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
