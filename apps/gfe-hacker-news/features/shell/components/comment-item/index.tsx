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
    <div className={cn('space-y-2 pt-6', { 'border-b pb-6': level === 1 })}>
      <div className="mb-3 flex items-center space-x-2">
        {level > 1 && <div className="-ml-4 h-px w-2 bg-neutral-300 " />}
        <p className="flex items-center space-x-2 text-sm">
          <span className="font-semibold text-neutral-900">{by}</span>
          <span>•</span>
          <span className="text-neutral-600">
            {formatDistanceToNow(new Date(time * 1000), { addSuffix: true })}
          </span>
        </p>
      </div>

      <p
        className="porse porse-neutral break-words text-neutral-600 text-sm"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: cleanText }}
      />
      {kids.length > 0 && (
        <div className="space-y-2 border-l pl-4">
          {kids.map((kid) => (
            <CommentItem key={kid} id={kid} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
