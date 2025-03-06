import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

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
}

const initialState: AppState = {
  toasts: [],
  isSearchActive: false,
  searchTerm: '',
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

export const { setSearchActive, setSearchTerm, addToast, removeToast } =
  appSlice.actions;

export default appSlice.reducer;
