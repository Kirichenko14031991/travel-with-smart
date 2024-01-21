import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectFavorites = state => state.favorites.items;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;
export const selectFilterBrand = state => state.filter.filterBrand;
export const selectFilterPrice = state => state.filter.filterPrice;
export const selectFilterMileageFrom = state => state.filter.filterMileage.from;
export const selectFilterMileageTo = state => state.filter.filterMileage.to;
export const selectIsFiltered = state => state.filter.isFiltered;

export const selectFilteredCars = createSelector(
  [
    selectCars,
    selectFilterBrand,
    selectFilterPrice,
    selectFilterMileageFrom,
    selectFilterMileageTo,
  ],
  (cars, filterBrand, filterPrice, filterMileageFrom, filterMileageTo) => {
    const filteredCars = cars.filter(car => {
      const carPriceToNum = parseInt(car.rentalPrice.replace('$', ''));
      const filterPriceToNum = parseInt(filterPrice);
      if (filterBrand && car.make.toLowerCase() !== filterBrand.toLowerCase()) {
        return false;
      }
      if (filterPrice && carPriceToNum > filterPriceToNum) {
        return false;
      }
      if (
        filterMileageFrom &&
        filterMileageTo &&
        (car.mileage < filterMileageFrom || car.mileage > filterMileageTo)
      ) {
        return false;
      }
      return true;
    });
    return filteredCars;
  }
);
