import type { UnsplashPhotoUrls } from '@repo/api-unsplash';
import { BREAKPOINTS } from '../config/breakpoints';
import type { WindowSize } from '../types/browser';

export const getOptimalImageUrl = (
  size: WindowSize,
  urls: UnsplashPhotoUrls
) => {
  if (!size?.width) {
    return urls.full;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return urls.thumb;
  }
  if (size.width <= BREAKPOINTS.md) {
    return urls.small;
  }
  if (size.width <= BREAKPOINTS.lg) {
    return urls.regular;
  }
  return urls.full;
};
