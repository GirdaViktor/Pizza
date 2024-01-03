import React from 'react';
import CartItem from "../CartItem/CartItem";

import "./CartItems.scss";

const CartItems:React.FC = () => {
  return (
    <div className="content__items">
      <CartItem />
    </div>
  );
};

export default CartItems;