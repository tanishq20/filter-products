export const priceRangeFilter = (priceRange, data) =>
  data.filter((item) => Number(item.price) <= priceRange)
