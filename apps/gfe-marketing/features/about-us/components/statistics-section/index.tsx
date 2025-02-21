import { SectionHeader } from '@/features/app/components/section-header';
import { Card } from '@repo/design-system/components/ui/card';
import Image from 'next/image';

const statistics = [
  {
    title: 'Downloads',
    stats: '25,664,890',
  },
  {
    title: 'Paid Users',
    stats: '17,219',
  },
  {
    title: 'Images in library',
    stats: '190,654,321',
  },
];

export const StatisticsSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <SectionHeader
        header="Statistics"
        title="More than premium abstract imagery"
        description="Our platform is more than just as a service to us - it is a catalyst for enriching lives through premium abstract imagery."
      />
      <div className="lg:flex lg:gap-8">
        <div className="w-full rounded-lg">
          <div className="aspect-[1] lg:aspect-[1.5]">
            <Image
              src="/about-us/about-us.png"
              alt="Statistics"
              className="h-full w-full rounded-lg object-cover"
              width={500}
              height={250}
            />
          </div>
        </div>
        <div className="mt-6 space-y-6">
          <p className="text-neutral-600">Our mission, in numbers</p>
          {statistics.map((stats) => {
            return (
              <Card key={stats.title} className="p-6 text-center">
                <h3 className="mb-4 font-bold text-4xl text-primary">
                  {stats.stats}
                </h3>
                <p className="text-lg">{stats.title}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
