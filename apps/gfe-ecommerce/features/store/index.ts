import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { collectionsApi } from '@repo/api-ecommerce/api/collections';
import { productsApi } from '@repo/api-ecommerce/api/products';

// Root reducer combining all slices
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [collectionsApi.reducerPath]: collectionsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// Store factory function so we can create stores with consistent configuration
export const createStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productsApi.middleware,
        collectionsApi.middleware
      ),
  });

  setupListeners(store.dispatch);

  return store;
};

// Export a pre-configured store instance for easy usage
export const store = createStore();

// Inferred types
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
