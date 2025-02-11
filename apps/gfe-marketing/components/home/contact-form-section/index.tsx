import { RiBuildingLine, RiMailLine, RiPhoneLine } from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import { Input } from '@repo/design-system/components/ui/input';
import { Textarea } from '@repo/design-system/components/ui/textarea';
import { SectionHeader } from '../section-header';

const contactDetails = [
  {
    icon: <RiBuildingLine className="text-primary" />,
    text: '123 Maple Street, Springfield, IL, USA',
  },
  {
    icon: <RiPhoneLine className="text-primary" />,
    text: '+1 (650) 555-0198',
  },
  {
    icon: <RiMailLine className="text-primary" />,
    text: 'hello@abstractly.com',
  },
];

export const ContactFormSection = () => {
  return (
    <section className="container py-10">
      <SectionHeader
        title="Talk to our team"
        titleClassname="text-start"
        description="We're committed to delivering the support you require to make your experience as smooth as possible."
        descriptionClassName="text-start"
      />

      <div className="mb-10 space-y-5">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="rounded-full p-2 shadow">{detail.icon}</div>
            <span className="text-neutral-600">{detail.text}</span>
          </div>
        ))}
      </div>

      <Card className="shadow">
        <CardContent className="space-y-4 p-4">
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-neutral-600 text-sm"
            >
              Name
            </label>
            <Input
              className="bg-neutral-50"
              id="name"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-neutral-600 text-sm"
            >
              Email
            </label>
            <Input
              className="bg-neutral-50"
              id="email"
              type="email"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-neutral-600 text-sm"
            >
              Message
            </label>
            <Textarea
              className="bg-neutral-50"
              id="message"
              placeholder="Write your message..."
              maxLength={500}
              rows={4}
            />
            <div className="text-right text-gray-500 text-xs">0/500</div>
          </div>

          <div className="pt-5">
            <Button className="w-full text-white">Submit</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
