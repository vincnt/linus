import { configureStore } from '@reduxjs/toolkit';
import { linetteApi } from './linette';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [linetteApi.reducerPath]: linetteApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(linetteApi.middleware),
});
