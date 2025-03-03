import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { UnsplashTopic } from '@repo/api-unsplash';

// Define types for our UI state
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

export interface AppState {
  toasts: Toast[];
  isSearchActive: boolean;
  searchTerm: string;
  selectedTopic: UnsplashTopic | null;
}

const initialState: AppState = {
  toasts: [],
  isSearchActive: false,
  searchTerm: '',
  selectedTopic: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSearchActive: (state: AppState, action: PayloadAction<boolean>) => {
      state.isSearchActive = action.payload;
      // Reset search term when deactivating search
      if (!action.payload) {
        state.searchTerm = '';
      }
    },

    setSearchTerm: (state: AppState, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.isSearchActive = action.payload.length > 0;
    },

    setSelectedTopic: (
      state: AppState,
      action: PayloadAction<UnsplashTopic>
    ) => {
      if (state.selectedTopic?.id === action.payload.id) {
        state.selectedTopic = null;
        return;
      }

      state.selectedTopic = action.payload;
    },

    addToast: (state: AppState, action: PayloadAction<Omit<Toast, 'id'>>) => {
      const id = Date.now().toString();
      state.toasts.push({
        ...action.payload,
        id,
        duration: action.payload.duration || 5000,
      });
    },

    removeToast: (state: AppState, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const {
  setSearchActive,
  setSearchTerm,
  setSelectedTopic,
  addToast,
  removeToast,
} = appSlice.actions;

export default appSlice.reducer;
