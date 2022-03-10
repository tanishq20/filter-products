export const filterReducerFnc = (state, action) => {
  switch (action.type) {
    case 'LOW_TO_HIGH':
      return { ...state, sortBy: action.payload }
    case 'HIGH_TO_LOW':
      return { ...state, sortBy: action.payload }
    case 'CLEAR_FILTER':
      return {
        ...state,
        sortBy: '',
        outOfStock: false,
        fastDelivery: false,
        priceRange: 1000,
      }
    default:
      return state
  }
}
