'use client';

import { NewsItem } from '@/features/shell/components/news-item';
import { SkeletonNewsSection } from '@/features/shell/components/skeleton-news-section';
import { APPLICATION_CONFIG } from '@/features/shell/config/application';
import { useGetCategoryStoriesQuery } from '@repo/api-hacker-news';
import { useCallback, useState } from 'react';

export const NewsSection = () => {
  const { data: storyIds, isFetching } = useGetCategoryStoriesQuery('show');

  const [displayCount, setDisplayCount] = useState(
    APPLICATION_CONFIG.itemsPerPage
  );

  const handleLoadMore = useCallback(() => {
    setDisplayCount((prevCount) => prevCount + APPLICATION_CONFIG.itemsPerPage);
  }, []);

  if (isFetching || !storyIds) {
    return <SkeletonNewsSection />;
  }

  return (
    <div className="container">
      {storyIds.map((id) => {
        return <NewsItem key={id} id={id} />;
      })}
    </div>
  );
};
