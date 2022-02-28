import { authApi } from '~/store/api/auth.api';
import authSlice from '~/store/slice/auth.slice';

// Packages
import { combineReducers, configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const persistConfig = {
  key: '@testrtk',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware),
    enhancers: [console.tron.createEnhancer!()],
    ...options,
  });

export const store = createStore();

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
