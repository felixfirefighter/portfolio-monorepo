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

export const getOptimalImageUrlForDetails = (
  size: WindowSize,
  urls: UnsplashPhotoUrls
) => {
  if (!size?.width || !size?.height) {
    return urls.full;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return urls.small;
  }
  return `${urls.raw}&h=${size.height - 200}`;
};

export const getOptimalImageUrlForProfilePic = (size: WindowSize) => {
  if (!size?.width) {
    return 32;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return 32;
  }

  return 40;
};
