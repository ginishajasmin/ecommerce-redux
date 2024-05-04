import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductListItem from './ProductListItem';
import { modifyItem, removeItem } from '../redux/reducer/cart';
import { useNavigate, useParams } from 'react-router-dom';
import { productList } from '../data/ProductList';

function Checkout() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [state, setState] = useState(params.id ?
        [
            {
                ...productList.find(
                    (element) => element.id === parseInt(params.id)
                ),
                count: 1,
            }
        ] : list)
    console.log("list -->", list);
    const incrementItem = (item) => {
        const index = state.findIndex(product => product.id === item.id);
        setState((state) => [
            ...state.slice(0, index),
            { ...item, count: item.count + 1 },
            ...state.slice(index + 1)
        ]);
    }
    const decrementItem = (item) => {
        if (item.count === 1) {
            removeItemFromCart(item);
        } else {
            const index = state.findIndex(product => product.id === item.id);
        setState((state) => [
            ...state.slice(0, index),
            { ...item, count: item.count - 1 },
            ...state.slice(index + 1)
        ]);
        }
    }
    const removeItemFromCart = (item) => {
        console.log("item -->", item);
        const index = state.findIndex(product => product.id === item.id);
        setState((state) => [
            ...state.slice(0, index),
            ...state.slice(index + 1)
        ]);
        dispatch(removeItem(item));
    }
    return (
        <>
            {state.length > 0 ? (
                <>
                    {state.map((item) => (
                        <ProductListItem
                            {...item}
                            key={item.id}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => removeItemFromCart(item)}
                        />))
                    }
                    <button className='btn btn-success' onClick={() => {
                        // Call removeItem before navigating
                        state.forEach(item => dispatch(removeItem(item)));
                        navigate('/success');
                    }}>Place Order</button>
                </>
            ) : (
                <h3>No Items in the Cart</h3>
            )}
        </>
    )
}

export default Checkout;