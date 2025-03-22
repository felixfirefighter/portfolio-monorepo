import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const CommentItemSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton className="mb-4 h-6 w-1/2" />
      <Skeleton className="h-56 w-full" />
    </div>
  );
};
