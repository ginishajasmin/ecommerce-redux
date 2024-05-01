import React from 'react'
import Header from '../layout/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import Cart from './CartList'

function Home() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Home