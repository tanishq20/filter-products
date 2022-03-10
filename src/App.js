import './style.css'
import Filter from './components/Filter'
import Products from './components/Products'

function App() {
  return (
    <>
      <div className='products-page d-flex'>
        <Filter />
        <Products />
      </div>
    </>
  )
}

export default App
