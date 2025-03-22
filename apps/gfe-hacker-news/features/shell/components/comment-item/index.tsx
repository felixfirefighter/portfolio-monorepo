import { CommentItemSkeleton } from '@/features/shell/components/comment-item-skeleton';
import { useGetItemQuery } from '@repo/api-hacker-news';
import { cn } from '@repo/design-system/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import DOMPurify from 'dompurify';

type Props = {
  id: number;
  level: number;
};

export const CommentItem: React.FC<Props> = ({ id, level }) => {
  const { data: comment, isFetching } = useGetItemQuery(id);

  if (isFetching || !comment) {
    return <CommentItemSkeleton />;
  }

  const { by, time, text, kids = [] } = comment;

  const cleanText = DOMPurify.sanitize(text ?? '');

  return (
    <div className={cn('relative space-y-2 py-4', { 'border-b': level === 1 })}>
      {level > 1 && (
        <div className="-ml-6 absolute top-0 h-full w-4 rounded-bl-lg border-b border-l" />
      )}
      <div className="mb-3 space-x-2">
        <p className="flex items-center space-x-2 text-sm">
          <span className="font-semibold text-neutral-900">{by}</span>
          <span>•</span>
          <span className="text-neutral-600">
            {formatDistanceToNow(new Date(time * 1000), { addSuffix: true })}
          </span>
        </p>
      </div>

      <p
        className="break-words text-gray-800 text-sm"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: cleanText }}
      />
      {kids.length > 0 && (
        <div className="ml-2 space-y-2 pb-8 pl-6">
          {kids.map((kid) => (
            <CommentItem key={kid} id={kid} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
