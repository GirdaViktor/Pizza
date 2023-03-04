import React, {useState} from 'react';
import Cart from "../cart/cart";
import CartEmpty from "../cartEmpty/CartEmpty";

const CartPage = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div className="container container--cart">
      {isEmpty ? <CartEmpty/> : <Cart/>}
    </div>
  );
};

export default CartPage;
