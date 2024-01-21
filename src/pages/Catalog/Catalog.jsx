import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarGallery from 'components/CarList/CarList';
import SearchForm from 'components/SearchForm/SearchForm';
import {
  selectCars,
  selectIsLoading,
  selectFilteredCars,
  selectIsFiltered,
} from 'redux/selectors';
import { Button } from './Catalog.styled';
import { NoResultsImage } from '../Favorites/Favorites.styled';
import { resetFilter } from 'redux/filterSlice';
import { fetchCars } from 'redux/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const isFiltered = useSelector(selectIsFiltered);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCars(currentPage));
    dispatch(resetFilter());
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const isEndOfCollection = cars.length % 12 !== 0;

  return (
    <>
      <SearchForm />
      {isFiltered && filteredCars.length === 0 && <NoResultsImage />}
      <CarGallery cars={isFiltered ? filteredCars : cars} />
      {!isLoading && !isEndOfCollection && !isFiltered && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </>
  );
};

export default Catalog;
