import { createContext, useContext, useReducer } from 'react'
import { filterReducerFnc } from './filterReducerFnc'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducerFnc, {
    priceRange: 1000,
    rating: null,
    sortBy: '',
    fastDelivery: false,
    outOfStock: true,
  })
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
