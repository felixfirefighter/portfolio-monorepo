type Props = {
  author?: string;
  timestamp?: number;
  content?: string;
  replies?: Props[];
};

export const CommentItem: React.FC<Props> = ({
  author,
  timestamp,
  content,
  replies = [],
}) => {
  return (
    <div className="space-y-2 border-b pb-3">
      <p className="font-semibold text-gray-600 text-sm">
        {author} • {timestamp}
      </p>
      <p className="text-gray-800 text-sm">{content}</p>
      {replies.length > 0 && (
        <div className="ml-4 space-y-2 border-l pl-4">
          {replies.map((reply, index) => (
            <CommentItem key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};
