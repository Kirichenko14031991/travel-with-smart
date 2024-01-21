import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterBrand: "",
    filterPrice: "",
    filterMileage: {
        from: "",
        to: ""
    },
    isFiltered: false,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter(state, { payload }) {
            state.isFiltered = true;
            state.filterBrand = payload.brand;
            state.filterPrice = payload.price;
            state.filterMileage.from = payload.mileageFrom;
            state.filterMileage.to = payload.mileageTo;
        },
        resetFilter(state) {
            state.isFiltered = false;
            state.filterBrand = '';
            state.filterPrice = '';
            state.filterMileage.from = '';
            state.filterMileage.to = '';  
        }
    }
});

export const filterReducer = filterSlice.reducer;
export const {
    updateFilter,
    resetFilter
} = filterSlice.actions;
