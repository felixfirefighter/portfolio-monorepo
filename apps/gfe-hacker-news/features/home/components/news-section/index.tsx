'use client';

import { NewsItem } from '@/features/shell/components/news-item';
import { SkeletonNewsSection } from '@/features/shell/components/skeleton-news-section';
import { useGetCategoryStoriesQuery } from '@repo/api-hacker-news';
import { useCallback, useState } from 'react';
const ITEMS_PER_PAGE = 20;

export const NewsSection = () => {
  const { data: storyIds, isFetching } = useGetCategoryStoriesQuery('new');

  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = useCallback(() => {
    setDisplayCount((prevCount) => prevCount + ITEMS_PER_PAGE);
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
