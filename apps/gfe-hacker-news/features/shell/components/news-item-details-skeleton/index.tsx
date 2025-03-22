import { Separator } from '@repo/design-system/components/ui/separator';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const NewsItemDetailsSkeleton: React.FC = () => {
  return (
    <div className="container py-4">
      <Skeleton className="h-5 w-14" />
      <div className="py-4">
        <Skeleton className="mb-4 h-28 w-full" />

        <div className="grid grid-cols-2 gap-2 text-neutral-600 text-xs md:flex md:gap-4">
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-4/5" />
        </div>

        <div className="py-8">
          <Skeleton className="mb-2 h-28 w-full" />
          <Skeleton className="mb-2 h-28 w-full" />
          <Skeleton className="mb-2 h-28 w-full" />
        </div>

        <Separator className="mb-8" />

        <Skeleton className="mb-4 h-6 w-1/2" />
        <Skeleton className="h-56 w-full" />
      </div>
    </div>
  );
};
