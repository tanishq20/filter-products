import { useFilter } from '../context/filter-context/filter-context'

export default function Filter() {
  const { state, dispatch } = useFilter()
  const { priceRange, rating, sortBy, fastDelivery, outOfStock } = state

  return (
    <div className='filter-wrapper'>
      <div className='filter-showcase'>
        <div className='filter-heading d-flex justify-content-between'>
          <p className='filter-heading-left'>Filters</p>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            className='filter-heading-right'
            onClick={() => dispatch({ type: 'CLEAR_FILTER' })}
          >
            Clear All
          </button>
        </div>
        <div className='products-section-change' />
        <div className='filter-content overflow-y-auto'>
          <div className='filter-subcontent'>
            <div className='filter-subcontent-heading'>Price</div>
            <div className='filter-subcontent-body'>
              <div className='filter-price d-flex align-items-center justify-content-between'>
                <div className='price-item'>₹5000</div>
                <div className='price-item'>to</div>
                <div className='price-item'>₹80000</div>
              </div>
              <div className='slider-wrapper'>
                <input
                  type='range'
                  min={0}
                  max={1000}
                  step={100}
                  className='slider'
                  list='price-range-datalist'
                  value={priceRange}
                  onChange={(e) =>
                    dispatch({ type: 'PRICE_RANGE', payload: e.target.value })
                  }
                />
                <datalist id='price-range-datalist'>
                  <option value='0' label='0'></option>
                  <option value='100'></option>
                  <option value='200'></option>
                  <option value='300'></option>
                  <option value='400'></option>
                  <option value='500' label='500'></option>
                  <option value='600'></option>
                  <option value='700'></option>
                  <option value='800'></option>
                  <option value='900'></option>
                  <option value='1000' label='1000'></option>
                </datalist>
              </div>
              <h5>{priceRange}</h5>
            </div>
          </div>
          <div className='products-section-change' />
          <div className='filter-subcontent'>
            <div className='filter-subcontent-heading'>Category</div>
            <div className='filter-subcontent-body'>
              <div className='filter-category d-flex flex-col'>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='category'
                    id='laptop-checkbox'
                    className='input-selector-field'
                  />
                  <label
                    htmlFor='laptop-checkbox'
                    className='input-selector-label'
                  >
                    Laptops
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='category'
                    id='mobile-checkbox'
                    className='input-selector-field'
                  />
                  <label
                    htmlFor='mobile-checkbox'
                    className='input-selector-label'
                  >
                    Mobiles
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='category'
                    id='watch-checkbox'
                    className='input-selector-field'
                  />
                  <label
                    htmlFor='watch-checkbox'
                    className='input-selector-label'
                  >
                    Watches
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='category'
                    id='camera-checkbox'
                    className='input-selector-field'
                  />
                  <label
                    htmlFor='camera-checkbox'
                    className='input-selector-label'
                  >
                    Camera
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className='filter-subcontent'>
            <div className='filter-subcontent-heading'>Rating</div>
            <div className='filter-subcontent-body'>
              <div className='filter-rating d-flex flex-col'>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='four-star-radio'
                    className='input-selector-field'
                    checked={rating === 4 ? true : false}
                    onChange={() => dispatch({ type: 'RATING', payload: 4 })}
                  />
                  <label
                    htmlFor='four-star-radio'
                    className='input-selector-label'
                  >
                    4 Stars &amp; above
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='three-star-radio'
                    className='input-selector-field'
                    checked={rating === 3 ? true : false}
                    onChange={() => dispatch({ type: 'RATING', payload: 3 })}
                  />
                  <label
                    htmlFor='three-star-radio'
                    className='input-selector-label'
                  >
                    3 Stars &amp; above
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='two-star-radio'
                    className='input-selector-field'
                    checked={rating === 2 ? true : false}
                    onChange={() => dispatch({ type: 'RATING', payload: 2 })}
                  />
                  <label
                    htmlFor='two-star-radio'
                    className='input-selector-label'
                  >
                    2 Stars &amp; above
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='rating'
                    id='one-star-radio'
                    className='input-selector-field'
                    checked={rating === 1 ? true : false}
                    onChange={() => dispatch({ type: 'RATING', payload: 1 })}
                  />
                  <label
                    htmlFor='one-star-radio'
                    className='input-selector-label'
                  >
                    1 Stars &amp; above
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className='filter-subcontent'>
            <div className='filter-subcontent-heading'>Sort By</div>
            <div className='filter-subcontent-body'>
              <div className='filter-sorting d-flex flex-col'>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sort-price'
                    id='low-to-high'
                    className='input-selector-field'
                    checked={sortBy === 'low-to-high' ? true : false}
                    onChange={() =>
                      dispatch({ type: 'LOW_TO_HIGH', payload: 'low-to-high' })
                    }
                  />
                  <label htmlFor='low-to-high' className='input-selector-label'>
                    Price - Low to High
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sort-price'
                    id='high-to-low'
                    className='input-selector-field'
                    checked={sortBy === 'high-to-low' ? true : false}
                    onChange={() =>
                      dispatch({ type: 'HIGH_TO_LOW', payload: 'high-to-low' })
                    }
                  />
                  <label htmlFor='high-to-low' className='input-selector-label'>
                    Price - High to Low
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className='filter-subcontent'>
            <div className='filter-subcontent-heading'>Fast Delivery</div>
            <div className='filter-subcontent-body'>
              <div className='filter-availability d-flex flex-col'>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='fast-delivery-filter'
                    id='fast-delivery-checkbox'
                    className='input-selector-field'
                    checked={fastDelivery ? true : false}
                    onChange={(e) =>
                      dispatch({
                        type: 'FAST_DELIVERY',
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor='fast-delivery-checkbox'
                    className='input-selector-label'
                  >
                    Fast Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='products-section-change' />
          <div className='filter-subcontent'>
            <div className='filter-subcontent-heading'>Availability</div>
            <div className='filter-subcontent-body'>
              <div className='filter-availability d-flex flex-col'>
                <div className='input-selector'>
                  <input
                    type='checkbox'
                    name='availability-filter'
                    id='availability-checkbox'
                    className='input-selector-field'
                    checked={outOfStock ? true : false}
                    onChange={(e) =>
                      dispatch({
                        type: 'OUT_OF_STOCK',
                        payload: e.target.checked,
                      })
                    }
                  />
                  <label
                    htmlFor='availability-checkbox'
                    className='input-selector-label'
                  >
                    Include Out of Stock
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
