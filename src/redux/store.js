import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoritesSlice';

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

const persistedFavoriteReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

export const store = configureStore({
	reducer: {
		cars: carsReducer,
		filter: filterReducer,
		favorites: persistedFavoriteReducer
	},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

