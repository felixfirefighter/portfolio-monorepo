import { NewsItemIcon } from '@/features/shell/components/news-item-icon';
import { NewsItemSkeleton } from '@/features/shell/components/news-item-skeleton';
import { routes } from '@/features/shell/config/routes';
import { formatHostname } from '@/features/shell/utils/format';
import {
  RiArrowUpDoubleLine,
  RiMessage2Line,
  RiPenNibLine,
  RiTimeLine,
} from '@remixicon/react';
import {
  type HackerNewsCategory,
  type HackerNewsItemId,
  useGetItemQuery,
} from '@repo/api-hacker-news';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { useMemo } from 'react';

type Props = {
  id: HackerNewsItemId;
  type: HackerNewsCategory;
};

export const NewsItem: React.FC<Props> = (props) => {
  const { id, type } = props;
  const { data: news, isFetching } = useGetItemQuery(id);

  const detailsLink = useMemo(() => {
    if (!news) {
      return '';
    }

    switch (type) {
      case 'new':
        return routes.latest(news.id.toString());
      case 'ask':
        return routes.ask(news.id.toString());
      case 'show':
        return routes.show(news.id.toString());
      case 'job':
        return routes.jobs(news.id.toString());
      default:
        return '';
    }
  }, [type, news]);

  if (isFetching || !news) {
    return <NewsItemSkeleton />;
  }

  return (
    <Link
      href={news.url ? news.url : detailsLink}
      target={news.url && '_blank'}
      className="flex cursor-pointer items-center space-x-4 px-1 py-4 hover:bg-primary/10"
    >
      <div className="flex-shrink-0 rounded-full bg-stone-50 p-2.5">
        <NewsItemIcon news={news} />
      </div>
      <div className="flex-grow">
        <div className="md:mb-2 md:flex md:items-center md:gap-1">
          <p className="mb-2 font-medium text-sm md:mb-0">{news.title}</p>
          {news.url && (
            <p className="mb-2 text-neutral-600 text-xs md:mb-0">
              ({formatHostname(news.url)})
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 text-neutral-600 text-xs md:flex md:gap-4">
          {news.type !== 'job' && (
            <>
              <div className="flex items-center gap-1">
                <RiArrowUpDoubleLine size={16} /> {news.score ?? 0} points
              </div>
              <div className="flex items-center gap-1">
                <RiMessage2Line size={14} /> {news.descendants} comments
              </div>
            </>
          )}

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
