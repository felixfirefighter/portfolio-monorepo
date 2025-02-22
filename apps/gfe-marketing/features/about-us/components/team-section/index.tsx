import { SectionHeader } from '@/features/app/components/section-header';
import {} from '@repo/design-system/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Joe Jackson',
    role: 'Founder & CEO',
    description:
      'Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.',
    image: '/about-us/team-1.png',
  },
  {
    name: 'Ash Karter',
    role: 'Founder & CFO',
    description:
      'Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.',
    image: '/about-us/team-2.png',
  },
  {
    name: 'Farias Amed',
    role: 'Front End AI Engineer',
    description:
      'Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.',
    image: '/about-us/team-3.png',
  },
  {
    name: 'Sarah Haust',
    role: 'Dev Ops',
    description:
      'Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.',
    image: '/about-us/team-4.png',
  },
];

export const TeamSection = () => {
  return (
    <section className="container py-10 lg:py-20">
      <SectionHeader
        header="Team"
        title="Meet our team"
        description="From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table."
      />
      <div className="grid grid-cols-1 gap-12 pt-6 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name}>
            <div className="mb-6 aspect-[1]">
              <Image
                src={member.image}
                alt={member.name}
                width={280}
                height={296}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl">{member.name}</h3>
            <p className="mb-3 font-medium text-lg text-primary">
              {member.role}
            </p>
            <p className=" text-neutral-600">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
