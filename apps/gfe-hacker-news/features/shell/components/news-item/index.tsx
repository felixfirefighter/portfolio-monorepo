import {
  RiArrowUpLine,
  RiArticleLine,
  RiClockwiseLine,
  RiMessage2Line,
} from '@remixicon/react';
import { type HackerNewsItemId, useGetItemQuery } from '@repo/api-hacker-news';
import Link from 'next/link';

type Props = {
  id: HackerNewsItemId;
};

export const NewsItem: React.FC<Props> = (props) => {
  const { id } = props;
  const { data, isFetching } = useGetItemQuery(id);

  return (
    <Link href={''} className="flex space-x-4 py-6">
      <div className="rounded-full bg-stone-50 p-2.5">
        <RiArticleLine className="h-5 w-5" />
      </div>
      <div>
        <p>{''}</p>
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <RiArrowUpLine size={14} /> 90 points
          </div>
          <div className="flex items-center gap-1">
            <span className="text-red-500">by {'Felix'}</span>
          </div>
          <div className="flex items-center gap-1">
            <RiClockwiseLine size={14} /> {'time'}
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <RiMessage2Line size={14} /> {'10'} comments
        </div>
      </div>
    </Link>
  );
};
