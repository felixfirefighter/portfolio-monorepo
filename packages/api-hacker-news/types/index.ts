export type HackerNewsItem = {
  id: number;
  deleted?: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  by: string;
  time: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
};

export type HackerNewsUser = {
  id: string;
  created: number;
  karma: number;
  about?: string;
  submitted?: number[];
};

export type HackerNewsCategory =
  | 'new'
  | 'top'
  | 'best'
  | 'ask'
  | 'show'
  | 'job';

export type HackerNewsItemId = number;
