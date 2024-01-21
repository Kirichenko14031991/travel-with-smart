import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import age from '../../helpers/age';
import {
  InfoLine,
  InfoItem,
  Description,
  InfoTitle,
  ConditionItem,
  ConditionList,
  SpanCondition,
  Button,
  CloseIcon,
  Overlay,
  ModalStyled,
  InfoWrap,
  Image,
  TitleLine,
  Title,
  Span,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ car, onClose }) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    mileage,
    img,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const ageCondition = age(rentalConditions);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <CloseIcon onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseIcon>
        <Image src={img} alt={make} loading="lazy" width="469" height="314" />

        <InfoWrap>
          <TitleLine>
            <Title>
              {make} <Span>{model}, </Span>
              {year}
            </Title>
          </TitleLine>

          <InfoLine>
            <InfoItem>{city}</InfoItem>
            <InfoItem>{country}</InfoItem>
            <InfoItem>Id: {id}</InfoItem>
            <InfoItem>Year: {year}</InfoItem>
            <InfoItem>Type: {type}</InfoItem>
          </InfoLine>
          <InfoLine>
            <InfoItem>Fuel Consumption: {fuelConsumption}</InfoItem>
            <InfoItem>Engine Size: {engineSize}</InfoItem>
          </InfoLine>
          <Description>{description}</Description>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <InfoLine>
            {accessories.map(item => (
              <InfoItem key={item}>{item}</InfoItem>
            ))}
          </InfoLine>
          <InfoLine>
            {functionalities.map(item => (
              <InfoItem key={item}>{item}</InfoItem>
            ))}
          </InfoLine>
          <InfoTitle>Rental Conditions:</InfoTitle>
          <ConditionList>
            <ConditionItem>
              <p>
                {ageCondition.conditionText}
                <SpanCondition> {ageCondition.minAge}</SpanCondition>
              </p>
            </ConditionItem>
            <ConditionItem>{rentalConditions.split('\n')[1]}</ConditionItem>
            <ConditionItem>{rentalConditions.split('\n')[2]}</ConditionItem>
            <ConditionItem>
              Mileage:{' '}
              <SpanCondition>{mileage.toLocaleString('en-US')}</SpanCondition>
            </ConditionItem>
            <ConditionItem>
              Price: <SpanCondition>{rentalPrice}</SpanCondition>
            </ConditionItem>
          </ConditionList>
        </InfoWrap>

        <Button
          href="tel:+380730000000"
          onTouchStart={() => (window.location.href = 'tel:380730000000')}
        >
          Rental car
        </Button>
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
