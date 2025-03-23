import { useGetMultipleItemsQuery } from '@repo/api-hacker-news';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import DOMPurify from 'dompurify';
import { useMemo } from 'react';

type Props = {
  parts: number[];
};

export const PollSection: React.FC<Props> = (props) => {
  const { parts } = props;
  const { data: polls, isFetching } = useGetMultipleItemsQuery(parts);

  const highestScore = useMemo(() => {
    return Math.max(
      ...Object.values(polls ?? {}).map((poll) => poll.score ?? 0),
      1
    );
  }, [polls]);

  if (isFetching || !polls) {
    return <Skeleton className="h-9 w-full py-1" />;
  }

  return (
    <div>
      {polls.map((poll) => {
        const cleanText = DOMPurify.sanitize(poll.text ?? '');

        return (
          <div
            key={poll.id}
            className="my-2 flex items-center gap-3 text-neutral-600 text-sm"
          >
            <div className="relative flex-grow">
              <div
                className="p-2 text-sm"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                dangerouslySetInnerHTML={{ __html: cleanText }}
              />
              <div
                className="absolute inset-0 rounded-md bg-primary/30"
                style={{
                  width: `${((poll.score ?? 0) / highestScore) * 100}%`,
                }}
              />
            </div>

            <div className="flex-shrink-0">{poll.score ?? 0} points</div>
          </div>
        );
      })}
    </div>
  );
};
