import React from 'react';
import Cart from "../cart/cart";
import CartEmpty from "../cartEmpty/CartEmpty";
import {useSelector} from "react-redux";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div className="container container--cart">
      {cartItems.length <= 0 ? <CartEmpty/> : <Cart/>}
    </div>
  );
};

export default CartPage;
