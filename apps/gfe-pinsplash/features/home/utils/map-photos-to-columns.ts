import { BREAKPOINTS } from '@/features/shell/config/breakpoints';
import type { UnsplashPhoto } from '@repo/api-unsplash';

export const mapPhotosToColumns = (
  photoPages: UnsplashPhoto[][],
  windowWidth: number
): UnsplashPhoto[][] => {
  // Determine column count based on screen width
  const columnCount = windowWidth >= BREAKPOINTS.lg ? 3 : 2;
  const columns: UnsplashPhoto[][] = Array.from(
    { length: columnCount },
    () => []
  );

  // Unsplash API may return duplicates
  const seen = new Set();
  let position = 0;
  for (const page of photoPages) {
    for (const photo of page) {
      if (!seen.has(photo.id)) {
        // Distribute photos across columns by index to keep order
        const columnIndex = position % columnCount;
        columns[columnIndex].push(photo);
        seen.add(photo.id);
        position++;
      }
    }
  }

  return columns;
};
