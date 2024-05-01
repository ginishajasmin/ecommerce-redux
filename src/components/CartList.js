import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
  const list = useSelector((state) => state.Cart.list);
  console.log("list -->", list);
  return (
    <div>{list[0].title}</div>
  )
}

export default Cart;