import React from 'react';

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая <span className="icon">😕</span></h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br/>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="/img/empty-cart.png" alt="Empty cart"/>
      <a href="/public" className="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default CartEmpty;