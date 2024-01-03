import React from 'react';
import CartTop from "../CartTop/CartTop";
import CartBottom from "../CartBottom/CartBottom";
import CartItems from "../CartItems/CartItems";

const Cart: React.FC = () => {
  return (
    <div className="cart">
      <CartTop />
      <CartItems />
      <CartBottom />
    </div>
  );
};

export default Cart;