import React from 'react';

import ContentBox from "../Components/ContentBox/ContentBox";
import CartContainer from "../Components/Cart/CartContainer";
import Cart from "../Components/Cart/Cart/Cart";
import CartEmpty from "../Components/Cart/CartEmpty/CartEmpty";

import "./CartPageStyle.scss";

const CartPage:React.FC = () => {
  const items: any[] = [1];

  return (
    <ContentBox className={'container--cart'}>
      {items.length !== 0 ?
        <CartContainer children={<Cart />} /> :
        <CartContainer className={'cart--empty'} children={<CartEmpty />} />}
    </ContentBox>
  );
};

export default CartPage;