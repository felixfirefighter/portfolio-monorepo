'use client';
import { NewsItemDetailsSkeleton } from '@/features/shell/components/news-item-details-skeleton';
import type { DetailsRouteParams } from '@/features/shell/types/routes';
import {
  RiArrowLeftLine,
  RiArrowUpDoubleLine,
  RiMessage2Line,
  RiPenNibLine,
  RiTimeLine,
} from '@remixicon/react';
import { useGetItemQuery } from '@repo/api-hacker-news';
import { Button } from '@repo/design-system/components/ui/button';
import { Separator } from '@repo/design-system/components/ui/separator';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import DOMPurify from 'dompurify';
import { useParams } from 'next/navigation';

export const NewsItemDetails = () => {
  const { id } = useParams<DetailsRouteParams>();

  const { data: news, isFetching } = useGetItemQuery(Number(id));

  if (isFetching || !news) {
    return <NewsItemDetailsSkeleton />;
  }

  console.log(news);

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

        {/* {news..map((comment, index) => (
          <Comment key={index} {...comment} />
        ))} */}

        <Skeleton className="mb-4 h-6 w-1/2" />
        <Skeleton className="h-56 w-full" />
      </div>
    </div>
  );
};
