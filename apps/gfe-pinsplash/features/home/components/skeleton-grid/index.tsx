import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const SkeletonGrid = () => {
  return (
    <section className="container grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-48 w-full" />
      ))}
    </section>
  );
};
