import {
  RiArticleLine,
  RiBarChartGroupedLine,
  RiExternalLinkLine,
} from '@remixicon/react';
import type { HackerNewsItem } from '@repo/api-hacker-news';

type Props = {
  news: HackerNewsItem;
};

export const NewsItemIcon: React.FC<Props> = (props) => {
  const { news } = props;

  if (news.url) {
    return <RiExternalLinkLine size={20} />;
  }

  if (news.type === 'poll') {
    return <RiBarChartGroupedLine size={20} />;
  }

  return <RiArticleLine size={20} />;
};
