import React from 'react'
import { productList } from '../data/ProductList'
import ProductCart from '../layout/ProductCart'

function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {productList.map((product) => <ProductCart {...product} key={product.id}/>)}
    </div>
  )
}

export default Dashboard