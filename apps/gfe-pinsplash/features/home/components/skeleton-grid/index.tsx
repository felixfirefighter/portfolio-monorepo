import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const SkeletonGrid = () => {
  return (
    <section className="container grid grid-cols-2 gap-2 lg:grid-cols-3">
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton key={index} className="h-96 w-full" />
      ))}
    </section>
  );
};
