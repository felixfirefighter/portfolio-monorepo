'use client';
import { CommentItem } from '@/features/shell/components/comment-item';
import { NewsItemDetailsSkeleton } from '@/features/shell/components/news-item-details-skeleton';
import { APPLICATION_CONFIG } from '@/features/shell/config/application';
import type { DetailsRouteParams } from '@/features/shell/types/routes';
import {
  RiArrowDownLine,
  RiArrowLeftLine,
  RiArrowUpDoubleLine,
  RiMessage2Line,
  RiPenNibLine,
  RiTimeLine,
} from '@remixicon/react';
import { useGetItemQuery } from '@repo/api-hacker-news';
import { Button } from '@repo/design-system/components/ui/button';
import { Separator } from '@repo/design-system/components/ui/separator';
import { formatDistanceToNow } from 'date-fns';
import DOMPurify from 'dompurify';
import { useParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export const NewsItemDetails = () => {
  const { id } = useParams<DetailsRouteParams>();

  const { data: news, isFetching } = useGetItemQuery(Number(id));

  const [displayCount, setDisplayCount] = useState(
    APPLICATION_CONFIG.commentsPerPage
  );

  const handleLoadMore = useCallback(() => {
    setDisplayCount(
      (prevCount) => prevCount + APPLICATION_CONFIG.commentsPerPage
    );
  }, []);

  if (isFetching || !news) {
    return <NewsItemDetailsSkeleton />;
  }

  const cleanText = DOMPurify.sanitize(news.text ?? '');

  return (
    <div className="container py-4">
      <Button variant={'link'} className="px-0">
        <RiArrowLeftLine /> Back
      </Button>
      <div className="py-4">
        <h1 className="mb-4 font-semibold text-3xl">{news.title}</h1>

        <div className="grid grid-cols-2 gap-2 text-neutral-600 text-sm md:flex md:gap-4">
          <div className="flex items-center gap-1 ">
            <RiArrowUpDoubleLine size={16} /> {news.score ?? 0} points
          </div>

          <div className="flex items-center gap-1">
            <RiPenNibLine size={16} />
            by <span className="font-medium text-primary">{news.by}</span>
          </div>

          <div className="flex items-center gap-1">
            <RiMessage2Line size={14} /> {news.descendants} comments
          </div>
          <div className="flex items-center gap-1">
            <RiTimeLine size={14} />{' '}
            {formatDistanceToNow(new Date(news.time * 1000), {
              addSuffix: true,
            })}
          </div>
        </div>

        <p
          className="py-8 text-neutral-600"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: cleanText }}
        />

        <Separator className="mb-8" />

        <div>
          <h2 className="mb-2 font-medium text-lg">
            {news.descendants} comments
          </h2>
          {news.kids?.slice(0, displayCount).map((id) => (
            <CommentItem key={id} id={id} level={1} />
          ))}
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
      </div>
    </div>
  );
};
