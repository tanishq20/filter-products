import { data } from '../api/productsData'
import { useFilter } from '../context/filter-context/filter-context'
import {
  priceRangeFilter,
  sortByFilter,
  fastDeliveryFilter,
  outOfStockFilter,
} from '../context/filter-context/utils/index'

export default function Products() {
  const { state } = useFilter()
  const { priceRange, sortBy, outOfStock, fastDelivery } = state
  const sortedProducts = sortByFilter(sortBy, data)
  const outOfStockProducts = outOfStockFilter(outOfStock, sortedProducts)
  const fastDeliveryProducts = fastDeliveryFilter(
    fastDelivery,
    outOfStockProducts
  )
  const priceRangeProducts = priceRangeFilter(priceRange, fastDeliveryProducts)

  return (
    <div className='products-wrapper'>
      <div className='products-showcase'>
        <div className='products-showcase-heading d-flex justify-content-between align-items-center flex-wrap'>
          <h2 className='products-showcase-head'>
            Showing All Products ({priceRangeProducts.length})
          </h2>
        </div>
        <div className='products-section-change' />
        <div className='products-showcase-items w-full d-flex justify-content-center align-items-center flex-wrap'>
          {priceRangeProducts.map(
            ({ id, name, image, ratings, price, inStock, fastDelivery }) => (
              <div className='ecomm-card rounded-5' key={id}>
                <button className='wishlist-btn'>
                  <i className='fas fa-heart wishlist-btn-icon' />
                </button>
                <div className='card-content rounded-5'>
                  <img
                    src={image}
                    alt='camera_image'
                    className='ecomm-prod-image'
                  />
                  <div className='ecomm-card-body'>
                    <div className='card-header rounded-5'>
                      <h2 className='card-subhead'>{name}</h2>
                      <span className='card-header-tag'>
                        1,58,616 Ratings &amp; 10,880 Reviews
                      </span>
                      <div className='ecomm-rating-badge'>
                        <div className='rating-badge'>
                          <span className='rating-badge-text'>{ratings}</span>
                          <i className='rating-badge-icon fas fa-star' />
                        </div>
                        <br />
                        <div className='rating-badge'>
                          <span className='rating-badge-text'>
                            {inStock ? 'In Stock' : 'Out Of Stock'}
                          </span>
                        </div>
                        <br />
                        <div className='rating-badge'>
                          <span className='rating-badge-text'>
                            {fastDelivery ? 'Fast Delivery' : 'Min 3 Days'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='card-item-price'>
                      <span className='card-item-curr-price'>{price}</span>
                      <span className='card-item-disc-price'>
                        {Number(price) + 100}
                      </span>
                      <span className='card-item-disc-per'>10% off</span>
                    </div>
                    <div className='card-footer'>
                      <button className='btn btn-primary'>BUY</button>
                      <button className='btn btn-secondary-outline'>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
