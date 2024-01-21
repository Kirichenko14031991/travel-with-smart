import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import carBrandOptions from 'data/makes.json';
import { fetchCars } from 'redux/operations';
import { resetFilter, updateFilter } from 'redux/filterSlice';
import {
  generateBrandOptions,
  generatePriceOptions,
} from 'helpers/brand&Price';
import { coma } from 'helpers/coma';
import {
  FormContainer,
  BrandPriceWrap,
  InputMileageWrap,
  Label,
  InputMileageText,
  CustomInputRight,
  CustomInputLeft,
  ButtonResetWrap,
  StyledButton,
} from './SearchForm.styled';
import { colorStyles } from './SearchStyles';

const optionsBrand = generateBrandOptions(carBrandOptions);
const optionsPrice = generatePriceOptions();

const SearchForm = () => {
  const dispatch = useDispatch();

  const selectBrandRef = useRef(null);
  const selectPriceRef = useRef(null);

  const [selectedPrice, setSelectedPrice] = useState('');
  const [priceOptions, setPriceOptions] = useState([]);

  priceOptions.map(option => <div key={option.value}>{option.label}</div>);

  const [mileageRange, setMileageRange] = useState({ from: '', to: '' });

  const handlePriceChange = selectedOption => {
    if (selectedOption) {
      setSelectedPrice(selectedOption.value);
      setPriceOptions(generatePriceOptions(selectedOption.value));
    }
  };

  const handleMileageChange = (part, value) => {
    const formattedValue = coma(value);
    setMileageRange(prevRange => ({ ...prevRange, [part]: formattedValue }));
  };

  const handleMileageFromChange = e =>
    handleMileageChange('from', e.target.value);
  const handleMileageToChange = e => handleMileageChange('to', e.target.value);

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value.trim();
    const price = form.elements.price.value;
    const mileageFrom = parseFloat(
      form.elements.mileageFrom.value.replace(/,/g, '')
    );
    const mileageTo = parseFloat(
      form.elements.mileageTo.value.replace(/,/g, '')
    );

    dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
    dispatch(fetchCars());
    form.reset();
    setMileageRange({ from: '', to: '' });
    selectBrandRef.current.clearValue();
    selectPriceRef.current.clearValue();
  };

  const handleResetClick = () => {
    dispatch(resetFilter());
  };

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <BrandPriceWrap>
        <Label>
          Car Brand
          <Select
            name="brand"
            options={optionsBrand}
            ref={selectBrandRef}
            styles={colorStyles(224)}
            placeholder="Enter the text"
          />
        </Label>

        <Label>
          Price/1 hour
          <Select
            name="price"
            defaultValue={selectedPrice}
            options={optionsPrice}
            onChange={handlePriceChange}
            ref={selectPriceRef}
            styles={colorStyles(125)}
            placeholder="To $"
          />
        </Label>
      </BrandPriceWrap>

      <InputMileageWrap>
        <Label>
          Сar mileage / km
          <InputMileageText>From</InputMileageText>
          <CustomInputLeft
            type="text"
            name="mileageFrom"
            value={mileageRange.from}
            onChange={handleMileageFromChange}
            autoComplete="off"
          />
        </Label>

        <Label style={{ color: 'white' }}>
          Сar mileage / km
          <InputMileageText>To</InputMileageText>
          <CustomInputRight
            type="text"
            name="mileageTo"
            value={mileageRange.to}
            onChange={handleMileageToChange}
            autoComplete="off"
          />
        </Label>
      </InputMileageWrap>

      <ButtonResetWrap>
        <StyledButton type="submit" onClick={handleResetClick}>
          Search
        </StyledButton>
      </ButtonResetWrap>
    </FormContainer>
  );
};

export default SearchForm;
