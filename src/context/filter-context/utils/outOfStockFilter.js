export const outOfStockFilter = (outOfStock, data) =>
  !outOfStock ? data.filter((item) => item.inStock) : data
