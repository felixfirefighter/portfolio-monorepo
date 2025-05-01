import { Skeleton } from '@repo/design-system/components/ui/skeleton';

export const ProductOverviewSectionSkeleton = () => {
  return (
    <div className="container grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[400px] w-full rounded-md md:h-[500px] xl:h-[800px]" />
        <div className="flex gap-4">
          <Skeleton className="h-32 w-20 lg:h-48 lg:w-48 xl:w-40" />
          <Skeleton className="h-32 w-20 lg:h-48 lg:w-48 xl:w-40" />
          <Skeleton className="h-32 w-20 lg:h-48 lg:w-48 xl:w-40" />
          <Skeleton className="h-32 w-20 lg:h-48 lg:w-48 xl:w-40" />
          <Skeleton className="h-32 w-20 lg:h-48 lg:w-48 xl:w-40" />
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <Skeleton className="h-16 w-3/4 rounded-md" />

        <div className="flex items-center space-x-2">
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />{' '}
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-8 w-52 rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-2/3 rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-32 rounded-md" />
          <div className="flex space-x-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-32 rounded-md" />
          <div className="flex space-x-2">
            <Skeleton className="h-14 w-16 " />
            <Skeleton className="h-14 w-16 " />
            <Skeleton className="h-14 w-16 " />
            <Skeleton className="h-14 w-16 " />
            <Skeleton className="h-14 w-16 " />
          </div>
        </div>

        <Skeleton className="h-10 w-40 rounded-md" />

        <Skeleton className="h-16 w-full rounded-md" />

        {Array.from({ length: 3 }).map((_, index) => (
          <div key={`spec-loading-${index}`} className="space-y-4">
            <Skeleton className="h-6 w-24 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
