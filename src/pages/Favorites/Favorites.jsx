import { useSelector } from 'react-redux';
import CarGallery from 'components/CarList/CarList';
import SearchForm from 'components/SearchForm/SearchForm';
import { selectFavorites } from 'redux/selectors';
import { FavoritesWrap, NoResultsImage } from './Favorites.styled';

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <FavoritesWrap>
      <SearchForm />
      {favoriteCars.length === 0 && <NoResultsImage />}
      <CarGallery cars={favoriteCars} />
    </FavoritesWrap>
  );
};

export default Favorites;
