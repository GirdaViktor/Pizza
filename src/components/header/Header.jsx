import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorCart } from "../../redux/slices/cartSlice";
import Search from "../search/Search";

const Header = () => {
  const {totalPrice, items} = useSelector(selectorCart);
  const count = items.reduce((sum, obj) => obj.count + sum, 0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to='/'>
            <img width={'250px'} src="./img/pizza-logo.svg" alt="Pizza logo"/>
          </Link>
        </div>

        <Search />

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <img src="img/cart-icon.svg" alt=""/>
            <span>{count}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
