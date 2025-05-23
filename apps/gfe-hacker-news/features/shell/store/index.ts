import appReducer from '@/features/shell/store/app/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { hackerNewsApi } from '@repo/api-hacker-news';

// Root reducer combining all slices
const rootReducer = combineReducers({
  [hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Store factory function so we can create stores with consistent configuration
export const createStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(hackerNewsApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

// Export a pre-configured store instance for easy usage
export const store = createStore();

// Inferred types
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
