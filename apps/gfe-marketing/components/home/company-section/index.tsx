import type { Company } from '@/types/home/company';
import Image from 'next/image';

const CompanySection = () => {
  const companies: Company[] = [
    { name: 'PhotoStock Pro', logo: '/logo/logo-1.png' },
    { name: 'DesignFlow', logo: '/logo/logo-1.png' },
    { name: 'CreativeSpace', logo: '/logo/logo-1.png' },
    { name: 'ArtisticHub', logo: '/logo/logo-1.png' },
    { name: 'MediaVault', logo: '/logo/logo-1.png' },
    { name: 'PixelPerfect', logo: '/logo/logo-1.png' },
    { name: 'StudioLabs', logo: '/logo/logo-1.png' },
  ];

  const renderLogos = (companies: Company[]) =>
    companies.map((company) => (
      <div
        key={company.name}
        className="mx-4 flex h-20 w-32 flex-shrink-0 flex-col items-center justify-center px-2 py-1"
      >
        <Image src={company.logo} alt={company.name} width={164} height={48} />
      </div>
    ));

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex">
        {/* First set of logos */}
        <div className="flex animate-marquee whitespace-nowrap">
          {renderLogos(companies)}
        </div>

        {/* Duplicate set of logos for seamless loop */}
        <div className="flex animate-marquee2 whitespace-nowrap">
          {renderLogos(companies)}
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
