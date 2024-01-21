export const generatePriceOptions = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    value: String((index + 1) * 10),
    label: String((index + 1) * 10),
  }));
};

export const generateBrandOptions = (carBrandOptions) => {
  return carBrandOptions.map((brand) => ({
    value: brand,
    label: brand,
  }));
};
