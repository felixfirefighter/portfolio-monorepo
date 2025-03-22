// src/utils.ts
import type {
  HackerNewsCategory,
  HackerNewsItem,
} from '@repo/api-hacker-news/types';

// Helper function to calculate optimal cache time based on category
export const getCacheLifetime = (category: HackerNewsCategory): number => {
  switch (category) {
    case 'new':
      // Cache new stories for a shorter time as they change frequently
      return 60 * 1000; // 1 minute
    case 'top':
    case 'best':
      // Cache top/best stories for longer as they change less frequently
      return 5 * 60 * 1000; // 5 minutes
    case 'ask':
    case 'show':
      return 3 * 60 * 1000; // 3 minutes
    case 'job':
      // Job postings change less frequently
      return 10 * 60 * 1000; // 10 minutes
    default:
      return 2 * 60 * 1000; // 2 minutes default
  }
};

// Helper function to determine if an item belongs to a specific category
export const isItemInCategory = (
  item: HackerNewsItem,
  category: HackerNewsCategory
): boolean => {
  if (!item) {
    return false;
  }

  switch (category) {
    case 'ask':
      return (
        item.type === 'story' &&
        item.title?.toLowerCase().startsWith('ask hn:') === true
      );
    case 'show':
      return (
        item.type === 'story' &&
        item.title?.toLowerCase().startsWith('show hn:') === true
      );
    case 'job':
      return item.type === 'job';
    default:
      return item.type === 'story';
  }
};

// Helper function to format relative time
export const getRelativeTime = (timestamp: number): string => {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;

  if (diff < 60) {
    return `${diff} seconds ago`;
  }
  if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  }
  if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  }
  return `${Math.floor(diff / 86400)} days ago`;
};

// Helper to extract domain from URL
const wwwRegex = /^www\./;
export const extractDomain = (url?: string): string => {
  if (!url) {
    return '';
  }
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(wwwRegex, '');
  } catch {
    return '';
  }
};
