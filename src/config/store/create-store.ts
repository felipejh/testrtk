import { authApi } from '~/store/api/auth.api';
import authSlice from '~/store/slice/auth.slice';

// Packages
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
    enhancers: [console.tron.createEnhancer()],
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
