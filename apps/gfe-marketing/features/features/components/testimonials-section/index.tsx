import { SectionHeader } from '@/features/app/components/section-header';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import Image from 'next/image';
import { testimonials } from './data';

export const TestimonialsSection = () => {
  return (
    <section className="container py-10">
      <SectionHeader
        header="Testimonials"
        title="Countless users, countless smiles"
        description="Explore our community's journey and discover why satisfaction defines us."
      />
      <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => {
          return (
            <Card key={testimonial.name} className="rounded-lg shadow">
              <CardContent className="flex flex-col space-y-4 p-5">
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.profilePic}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {testimonial.handler}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
