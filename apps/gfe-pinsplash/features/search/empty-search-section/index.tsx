'use client';

import { RiSearch2Line } from '@remixicon/react';

type Props = {
  title: string;
};

export const EmptySearchSection: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className="container py-8">
      <h1 className="font-bold text-3xl text-neutral-900 md:text-4xl">
        {title}
      </h1>

      <div className="flex h-[calc(100vh-224px)] flex-col items-center justify-center">
        <div className="mb-4 rounded-full p-4 shadow">
          <RiSearch2Line className="text-primary" />
        </div>
        <h2 className="py-2 font-medium text-neutral-900 text-xl md:text-2xl">
          No results found
        </h2>
        <p className="text-neutral-900 md:text-lg">
          Try using different keywords
        </p>
      </div>
    </div>
  );
};
