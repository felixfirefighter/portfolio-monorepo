import { formatNumber } from '@/features/shell/config/number';
import type { PhotoRouteParams } from '@/features/shell/types/routes';
import { useGetPhotoStatisticsQuery } from '@repo/api-unsplash';
import { format } from 'date-fns';
import { useParams } from 'next/navigation';
import { StatsSkeletonSection } from '../stats-skeleton-section';

interface Props {
  date: string;
}

export const StatsSection: React.FC<Props> = (props) => {
  const { date } = props;
  const params = useParams<PhotoRouteParams>();
  const { data: stats, isFetching } = useGetPhotoStatisticsQuery(params.id);

  if (isFetching || !stats) {
    return <StatsSkeletonSection />;
  }

  return (
    <>
      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs">Views</p>
      </div>
      <p className="pb-2 font-semibold">{formatNumber(stats.views.total)}</p>

      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs">Date</p>
      </div>
      <p className="pb-2 font-semibold">{format(date, 'dd MMM, yyyy')}</p>

      <div className="py-2">
        <p className="font-semibold text-neutral-600 text-xs">Downloads</p>
      </div>
      <p className="pb-2 font-semibold">
        {formatNumber(stats.downloads.total)}
      </p>
    </>
  );
};
