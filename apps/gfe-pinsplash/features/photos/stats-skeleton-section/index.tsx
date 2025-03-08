import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const StatsSkeletonSection = () => {
  return (
    <>
      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs">Views</p>
      </div>
      <div className="pb-2">
        <Skeleton className="h-5 w-20" />
      </div>

      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs">Date</p>
      </div>
      <div className="pb-2">
        <Skeleton className="h-5 w-36" />
      </div>

      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs">Downloads</p>
      </div>
      <div className="pb-2">
        <Skeleton className="h-5 w-20" />
      </div>
    </>
  );
};
