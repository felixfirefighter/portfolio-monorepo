import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const NewsItemSkeleton: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 py-4">
      <Skeleton className="h-10 w-10 flex-shrink-0 rounded-full" />

      <div>
        <Skeleton className="mb-1 h-10 w-96 max-w-full" />
        <Skeleton className="mb-2 h-4 w-1/2" />
        <div className="grid grid-cols-2 gap-2 text-neutral-600 text-xs md:flex md:gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
};
