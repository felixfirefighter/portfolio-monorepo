import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define types for our UI state
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

export interface UiState {
  // For masonry layout
  columnCount: number;
  // For toast notifications
  toasts: Toast[];
  // UI flags
  isSearchActive: boolean;
  searchTerm: string;
  currentLayout: 'masonry' | 'grid';
}

const initialState: UiState = {
  columnCount: 3,
  toasts: [],
  isSearchActive: false,
  searchTerm: '',
  currentLayout: 'masonry',
};

export const uiSlice = createSlice({
  name: 'unsplashUi',
  initialState,
  reducers: {
    setColumnCount: (state: UiState, action: PayloadAction<number>) => {
      state.columnCount = action.payload;
    },

    setLayout: (state: UiState, action: PayloadAction<'masonry' | 'grid'>) => {
      state.currentLayout = action.payload;
    },

    setSearchActive: (state: UiState, action: PayloadAction<boolean>) => {
      state.isSearchActive = action.payload;
      // Reset search term when deactivating search
      if (!action.payload) {
        state.searchTerm = '';
      }
    },

    setSearchTerm: (state: UiState, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.isSearchActive = action.payload.length > 0;
    },

    addToast: (state: UiState, action: PayloadAction<Omit<Toast, 'id'>>) => {
      const id = Date.now().toString();
      state.toasts.push({
        ...action.payload,
        id,
        duration: action.payload.duration || 5000,
      });
    },

    removeToast: (state: UiState, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const {
  setColumnCount,
  setLayout,
  setSearchActive,
  setSearchTerm,
  addToast,
  removeToast,
} = uiSlice.actions;

export default uiSlice.reducer;
