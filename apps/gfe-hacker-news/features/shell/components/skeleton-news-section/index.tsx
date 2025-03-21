import { NewsItemSkeleton } from '@/features/shell/components/news-item-skeleton';

export const SkeletonNewsSection = () => {
  return (
    <div className="container">
      {Array.from({ length: 10 }).map((_, index) => {
        return <NewsItemSkeleton key={index} />;
      })}
    </div>
  );
};
