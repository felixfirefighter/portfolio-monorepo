import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { unsplashApi } from '@repo/api-unsplash/api';
import photosReducer from '@repo/api-unsplash/slices/photos-slice';
import uiReducer from '@repo/api-unsplash/slices/ui-slice';

// Root reducer combining all slices
const rootReducer = combineReducers({
  [unsplashApi.reducerPath]: unsplashApi.reducer,
  ui: uiReducer,
  photos: photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Store factory function so we can create stores with consistent configuration
export const createStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(unsplashApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

// Export a pre-configured store instance for easy usage
export const store = createStore();

// Inferred types
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
