export * from '@repo/api-unsplash/api';

export {
  setColumnCount,
  setLayout,
  setSearchActive,
  setSearchTerm,
  addToast,
  removeToast,
  type Toast,
  type UiState,
} from '@repo/api-unsplash/slices/ui-slice';

export {
  trackDownload,
  addToRecentlyViewed,
  toggleFavorite,
  clearHistory,
  clearDownloads,
  type DownloadHistory,
  type PhotosState,
} from '@repo/api-unsplash/slices/photos-slice';

export * from '@repo/api-unsplash/types';
