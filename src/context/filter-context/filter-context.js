import { createContext, useContext, useReducer } from 'react'
import { filterReducerFnc } from './utils/index'

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducerFnc, {
    sortBy: '',
    inStock: false,
    fastDelivery: false,
    priceRange: 1000,
  })
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter }
