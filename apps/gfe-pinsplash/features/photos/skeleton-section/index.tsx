import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { StatsSkeletonSection } from '../stats-skeleton-section';

export const SkeletonSection = () => {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-36" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="py-4">
        <Skeleton className="h-64 w-full" />
      </div>
      <div className="py-4">
        <Skeleton className="h-16 w-full" />
      </div>

      <StatsSkeletonSection />

      <div className="grid grid-cols-3 gap-3 py-4">
        {Array.from({ length: 15 }).map((_, index) => {
          return (
            <Skeleton key={`tag-skeleton-${index}`} className="h-7 w-full" />
          );
        })}
      </div>
    </div>
  );
};
