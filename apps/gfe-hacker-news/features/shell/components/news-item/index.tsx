import { formatHostname } from '@/features/shell/utils/format';
import {
  RiArrowUpDoubleLine,
  RiArticleLine,
  RiMessage2Line,
  RiPenNibLine,
  RiTimeLine,
} from '@remixicon/react';
import { type HackerNewsItemId, useGetItemQuery } from '@repo/api-hacker-news';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

type Props = {
  id: HackerNewsItemId;
};

export const NewsItem: React.FC<Props> = (props) => {
  const { id } = props;
  const { data: news, isFetching } = useGetItemQuery(id);

  if (isFetching || !news) {
    return (
      <div className="flex">
        <Skeleton className="h-4 w-4" />

        <div>
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    );
  }

  console.log('news', news);

  return (
    <Link href={''} className="flex items-center space-x-4 py-6">
      <div className="flex-shrink-0 rounded-full bg-stone-50 p-2.5">
        <RiArticleLine size={20} />
      </div>
      <div>
        <p className="mb-1 font-medium text-sm">{news.title}</p>
        {news.url && (
          <p className="mb-2 text-neutral-600 text-xs">
            ({formatHostname(news.url)})
          </p>
        )}
        <div className="mb-3 flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-neutral-600">
            <RiArrowUpDoubleLine size={16} /> {news.score ?? 0} points
          </div>
          <div className="flex items-center gap-2">
            <RiMessage2Line size={14} /> {'10'} comments
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600 text-xs">
          <div className="flex items-center gap-1">
            <RiPenNibLine size={16} />
            by <span className="font-medium text-primary">{news.by}</span>
          </div>

          <div className="flex items-center gap-1">
            <RiTimeLine size={14} />{' '}
            {formatDistanceToNow(new Date(news.time * 1000), {
              addSuffix: true,
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};
