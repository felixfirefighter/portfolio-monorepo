import type { AppDispatch, RootState } from '@repo/api-unsplash/store';
import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Domain-specific selector hooks
export const useToasts = () => useAppSelector((state) => state.ui.toasts);
export const useColumnCount = () =>
  useAppSelector((state) => state.ui.columnCount);
export const useSearchActive = () =>
  useAppSelector((state) => state.ui.isSearchActive);
export const useSearchTerm = () =>
  useAppSelector((state) => state.ui.searchTerm);
export const useCurrentLayout = () =>
  useAppSelector((state) => state.ui.currentLayout);

export const usePhotoDownloadHistory = (photoId?: string) => {
  const downloadHistory = useAppSelector(
    (state) => state.photos.downloadHistory
  );
  return photoId ? downloadHistory[photoId] || [] : downloadHistory;
};

export const useRecentlyViewed = () =>
  useAppSelector((state) => state.photos.recentlyViewed);
export const useFavorites = () =>
  useAppSelector((state) => state.photos.favorites);

// Custom hook to check if a photo is favorited
export const useIsFavorite = (photoId: string) => {
  const favorites = useAppSelector((state) => state.photos.favorites);
  return favorites.includes(photoId);
};
