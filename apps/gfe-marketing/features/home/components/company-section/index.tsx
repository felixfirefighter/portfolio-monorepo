import type { Company } from '@/features/home/models/company';
import { Marquee } from '@repo/design-system/components/ui/marquee';
import Image from 'next/image';

const companies: Company[] = [
  { name: 'Wan Nain', logo: '/logo/logo-1.png' },
  { name: 'Robinwood', logo: '/logo/logo-2.png' },
  { name: 'Swapdo', logo: '/logo/logo-3.png' },
  { name: 'Diamond', logo: '/logo/logo-4.png' },
  { name: 'Air Car', logo: '/logo/logo-5.png' },
  { name: 'Makro Hard', logo: '/logo/logo-6.png' },
];

export const CompanySection = () => {
  return (
    <div className="py-10 md:py-20">
      <p className="mb-6 text-center font-medium text-neutral-600">
        Used by teams that you love
      </p>
      <Marquee>
        {companies.map((company) => (
          <div key={company.name} className="px-10 py-5">
            <Image
              src={company.logo}
              alt={company.name}
              width={158}
              height={38}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
