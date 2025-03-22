'use client';

import { NewsItem } from '@/features/shell/components/news-item';
import { SkeletonNewsSection } from '@/features/shell/components/skeleton-news-section';
import { APPLICATION_CONFIG } from '@/features/shell/config/application';
import { RiArrowDownLine } from '@remixicon/react';
import {
  type HackerNewsCategory,
  useGetCategoryStoriesQuery,
} from '@repo/api-hacker-news';
import { Button } from '@repo/design-system/components/ui/button';
import { useCallback, useState } from 'react';

type Props = {
  category: HackerNewsCategory;
};

export const NewsSection: React.FC<Props> = (props) => {
  const { category } = props;
  const { data: storyIds, isFetching } = useGetCategoryStoriesQuery(category);

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
      {storyIds.slice(0, displayCount).map((id) => {
        return <NewsItem key={id} id={id} />;
      })}
      <div className="py-6">
        <Button
          variant={'outline'}
          className="w-full md:w-auto"
          onClick={handleLoadMore}
        >
          More
          <RiArrowDownLine />
        </Button>
      </div>
    </div>
  );
};
