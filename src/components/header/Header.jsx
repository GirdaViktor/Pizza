import React from 'react';
import {Link} from "react-router-dom";
import Search from "../search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to='/'>
            <img width={'250px'} src="img/pizza-logo.svg" alt="Pizza logo"/>
          </Link>
        </div>

        <Search />

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <img src="img/cart-icon.svg" alt=""/>
            <span>3</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
