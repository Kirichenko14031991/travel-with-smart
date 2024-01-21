import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      const newFavoriteCar = payload;
      state.items.push(newFavoriteCar);
    },
    deleteFavorite: (state, { payload }) => {
      const carToRemove = payload;
      state.items = state.items.filter((car) => car.id !== carToRemove.id);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer; 





