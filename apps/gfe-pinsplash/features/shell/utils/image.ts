import type { ImageSize } from '@/features/shell/types/size';
import type { UnsplashPhotoUrls } from '@repo/api-unsplash';
import { BREAKPOINTS } from '../config/breakpoints';
import type { WindowSize } from '../types/browser';

export const getOptimalSizeForMasonryImage = (size: WindowSize): ImageSize => {
  if (!size?.width || !size?.height) {
    return {
      width: 500,
      height: 500,
    };
  }

  if (size.width <= BREAKPOINTS.sm) {
    return {
      width: 200,
      height: 200,
    };
  }
  if (size.width <= BREAKPOINTS.md) {
    return {
      width: 400,
      height: 400,
    };
  }
  return {
    width: 500,
    height: 500,
  };
};

export const getOptimalImageUrl = (
  size: WindowSize,
  urls: UnsplashPhotoUrls
) => {
  if (!size?.width) {
    return `${urls.full}&q=75&auto=format`;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return `${urls.full}&w=200&q=75&auto=format`;
  }
  if (size.width <= BREAKPOINTS.md) {
    return `${urls.full}&w=400&q=75&auto=format`;
  }
  return `${urls.full}&w=500&q=75&auto=format`;
};

export const getOptimalImageUrlForDetails = (
  size: WindowSize,
  urls: UnsplashPhotoUrls
) => {
  if (!size?.width || !size?.height) {
    return `${urls.full}&q=75&auto=format`;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return urls.small;
  }
  return `${urls.raw}&h=${size.height - 200}&q=75&auto=format`;
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
