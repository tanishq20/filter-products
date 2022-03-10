export default function Filter() {
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
                <div className='price-item'>₹40000</div>
                <div className='price-item'>₹80000</div>
              </div>
              <div className='slider-wrapper'>
                <input
                  type='range'
                  min={1}
                  max={100}
                  defaultValue={50}
                  className='slider'
                />
              </div>
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
                    name='sorting'
                    id='low-to-high-radio'
                    className='input-selector-field'
                  />
                  <label
                    htmlFor='low-to-high-radio'
                    className='input-selector-label'
                  >
                    Price - Low to High
                  </label>
                </div>
                <div className='input-selector'>
                  <input
                    type='radio'
                    name='sorting'
                    id='high-to-low-radio'
                    className='input-selector-field'
                  />
                  <label
                    htmlFor='high-to-low-radio'
                    className='input-selector-label'
                  >
                    Price - High to Low
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
                    name='filter'
                    id
                    className='input-selector-field'
                    defaultChecked
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
