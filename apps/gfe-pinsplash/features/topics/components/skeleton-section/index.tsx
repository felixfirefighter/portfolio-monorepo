import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const SkeletonSection = () => {
  return (
    <section className="container">
      <div className="py-4">
        <Skeleton className="h-60 rounded-xl md:h-96" />
      </div>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton key={index} className="h-96 w-full" />
        ))}
      </div>
    </section>
  );
};
