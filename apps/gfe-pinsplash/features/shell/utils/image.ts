import type {
  ImageSize,
  ImageSizeWithLabel,
} from '@/features/shell/types/size';
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
      width: 300,
      height: 300,
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
    return `${urls.full}&q=75`;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return `${urls.full}&w=300&h=auto&q=75`;
  }
  if (size.width <= BREAKPOINTS.md) {
    return `${urls.full}&w=400&&h=autoq=75`;
  }
  return `${urls.full}&w=500&&h=auto&q=75`;
};

export const getOptimalImageUrlForDetails = (
  size: WindowSize,
  urls: UnsplashPhotoUrls
) => {
  if (!size?.width || !size?.height) {
    return `${urls.full}&q=75`;
  }

  if (size.width <= BREAKPOINTS.sm) {
    return urls.small;
  }
  return `${urls.raw}&h=${size.height - 200}&q=75`;
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

export const getResizedDimensions = (
  originalWidth: number,
  originalHeight: number
): ImageSizeWithLabel[] => {
  const targetWidths = [640, 1920, 2400, originalWidth];
  const targetLabels = ['Small', 'Medium', 'Large', 'Original Size'];
  return targetWidths.map((targetWidth, index) => {
    const targetHeight = Math.round(
      (targetWidth / originalWidth) * originalHeight
    );
    return {
      label: targetLabels[index],
      width: targetWidth,
      height: targetHeight,
    };
  });
};
