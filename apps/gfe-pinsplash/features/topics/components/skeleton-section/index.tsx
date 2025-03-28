import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const SkeletonSection = () => {
  return (
    <section className="container">
      <div className="py-4">
        <Skeleton className="h-60 max-w-full rounded-xl md:h-96" />
      </div>
      <Skeleton className="h-32 w-96 max-w-full rounded-xl" />
    </section>
  );
};
