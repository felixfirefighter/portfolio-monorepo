import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const StatsSkeletonSection = () => {
  return (
    <>
      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs md:text-sm">
          Views
        </p>
      </div>
      <div className="pb-2">
        <Skeleton className="h-5 w-20 md:h-7" />
      </div>

      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs md:text-sm">
          Date
        </p>
      </div>
      <div className="pb-2">
        <Skeleton className="h-5 w-36 md:h-7" />
      </div>

      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs md:text-sm">
          Downloads
        </p>
      </div>
      <div className="pb-2">
        <Skeleton className="h-5 w-20 md:h-7" />
      </div>
    </>
  );
};
