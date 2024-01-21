import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, deleteFavorite } from 'redux/favoritesSlice';
import { CardWrap, ImageWrap, Image, FavoriteButton, InfoWrap, InfoItem, TitleLine, Title, Span, InfoLine, Button } from './CarCard.styled';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => setIsShowModal((prev) => !prev);

  const handleAddFavorite = () => {
    dispatch(addFavorite(car));
  };

  const handleRemoveFavorite = () => {
    dispatch(deleteFavorite(car));
  };

  const isFavorite = favorites.find(function (item) {
    return item.id === car.id;
  });

  return (
    <>
      <CardWrap>
        <ImageWrap>
          <Image src={car.img} width="274px" alt="car" loading="lazy" />
          {isFavorite ? (
            <FavoriteButton type="button" onClick={handleRemoveFavorite}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" fill="#3470FF" stroke="#3470FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FavoriteButton>
          ) : (
            <FavoriteButton type="button" onClick={handleAddFavorite}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FavoriteButton>
          )}
        </ImageWrap>

        <InfoWrap>
          <TitleLine>
            <Title>
              {car.make} <Span>{car.model}</Span>, {car.year}
            </Title>
            <p>{car.rentalPrice}</p>
          </TitleLine>

          <InfoLine>
            <InfoItem>{car.address.split(",")[1]}</InfoItem>
            <InfoItem>{car.address.split(",")[2]}</InfoItem>
            <InfoItem>{car.rentalCompany}</InfoItem>
          </InfoLine>

          <InfoLine>
            <InfoItem>{car.mileage}</InfoItem>
            <InfoItem>{car.type}</InfoItem>
            <InfoItem>{car.id}</InfoItem>
            <InfoItem>{car.accessories[0]}</InfoItem>
          </InfoLine>
        </InfoWrap>

        <Button type='button' onClick={toggleModal}>Learn more</Button>
      </CardWrap >

      {isShowModal && <Modal onClose={toggleModal} car={car}></Modal>}
    </>
  )
}

export default CarCard;