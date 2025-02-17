import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div>
        <h2>Cart</h2>
        <button onClick={handleClearCart}>Clear</button>
      <ItemList items={cartItems}/>
    </div>
  )
}

export default Cart
