import React from 'react';
import { useSelector } from "react-redux";
import Cart from "../cart/cart";
import CartEmpty from "../cartEmpty/CartEmpty";
import { selectorCart } from "../../redux/slices/cartSlice";

const CartPage = () => {
  const cartItems = useSelector(selectorCart).items;

  return (
    <div className="container container--cart">
      {cartItems.length <= 0 ? <CartEmpty/> : <Cart/>}
    </div>
  );
};

export default CartPage;
