export const filterReducerFnc = (state, action) => {
  switch (action.type) {
    case 'PRICE_RANGE':
      return { ...state, priceRange: action.payload }
    case 'RATING':
      return { ...state, rating: action.payload }
    case 'LOW_TO_HIGH':
      return { ...state, sortBy: action.payload }
    case 'HIGH_TO_LOW':
      return { ...state, sortBy: action.payload }
    case 'FAST_DELIVERY':
      return { ...state, fastDelivery: action.payload }
    case 'OUT_OF_STOCK':
      return { ...state, outOfStock: action.payload }
    case 'CLEAR_FILTER':
      return {
        ...state,
        priceRange: 1000,
        rating: null,
        sortBy: '',
        fastDelivery: false,
        outOfStock: true,
      }
    default:
      return state
  }
}
