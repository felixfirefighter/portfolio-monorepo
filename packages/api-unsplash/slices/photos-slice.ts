import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface DownloadHistory {
  photoId: string;
  downloadUrl: string;
  downloadedAt: string;
  size: 'small' | 'medium' | 'large';
}

export interface PhotosState {
  // Track downloads for user statistics
  downloadHistory: Record<string, DownloadHistory[]>;
  // Recently viewed photos for user history
  recentlyViewed: string[];
  // Favorite photos for user collections
  favorites: string[];
}

const initialState: PhotosState = {
  downloadHistory: {},
  recentlyViewed: [],
  favorites: [],
};

export const photosSlice = createSlice({
  name: 'unsplashPhotos',
  initialState,
  reducers: {
    trackDownload: (
      state: PhotosState,
      action: PayloadAction<Omit<DownloadHistory, 'downloadedAt'>>
    ) => {
      const { photoId, downloadUrl, size } = action.payload;

      if (!state.downloadHistory[photoId]) {
        state.downloadHistory[photoId] = [];
      }

      state.downloadHistory[photoId].push({
        photoId,
        downloadUrl,
        downloadedAt: new Date().toISOString(),
        size,
      });
    },

    addToRecentlyViewed: (
      state: PhotosState,
      action: PayloadAction<string>
    ) => {
      // Remove if exists to avoid duplicates
      state.recentlyViewed = state.recentlyViewed.filter(
        (id) => id !== action.payload
      );

      // Add to front of the list
      state.recentlyViewed.unshift(action.payload);

      // Keep only the last 20 viewed items
      state.recentlyViewed = state.recentlyViewed.slice(0, 20);
    },

    toggleFavorite: (state: PhotosState, action: PayloadAction<string>) => {
      const photoId = action.payload;
      const index = state.favorites.indexOf(photoId);

      if (index === -1) {
        state.favorites.push(photoId);
      } else {
        state.favorites.splice(index, 1);
      }
    },

    clearHistory: (state: PhotosState) => {
      state.recentlyViewed = [];
    },

    clearDownloads: (state: PhotosState) => {
      state.downloadHistory = {};
    },
  },
});

export const {
  trackDownload,
  addToRecentlyViewed,
  toggleFavorite,
  clearHistory,
  clearDownloads,
} = photosSlice.actions;

export default photosSlice.reducer;
