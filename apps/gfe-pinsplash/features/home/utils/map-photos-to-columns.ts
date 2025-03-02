import { BREAKPOINTS } from '@/features/shell/config/breakpoints';
import type { UnsplashPhoto } from '@repo/api-unsplash';

export const mapPhotosToColumns = (
  data: UnsplashPhoto[],
  windowWidth: number
): UnsplashPhoto[][] => {
  // Unsplash API may return duplicates
  const photos =
    data.filter(
      (() => {
        const seen = new Set();
        return (photo) => !seen.has(photo.id) && seen.add(photo.id);
      })()
    ) ?? [];

  // Determine column count based on screen width
  const columnCount = windowWidth >= BREAKPOINTS.lg ? 3 : 2;
  const columns: UnsplashPhoto[][] = Array.from(
    { length: columnCount },
    () => []
  );

  // Distribute photos across columns by index to keep order
  photos.forEach((photo, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(photo);
  });

  return columns;
};
