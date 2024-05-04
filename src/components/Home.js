import React from 'react'
import Header from '../layout/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import Cart from './CartList'
import Checkout from './Checkout'
import Success from './Success'

function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout/' element={<Checkout />}>
          <Route path='' element={<Checkout />} />
          <Route path=':id' element={<Checkout />} />
        </Route>
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  )
}

export default Home