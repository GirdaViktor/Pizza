import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectorCartById } from "../../redux/slices/cartSlice";
import { TYPE_NAMES } from "./CardItem.enum";

const CardItem = ({id, title, types, size, price, imgUrl}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const cartItem = useSelector(selectorCartById(id));
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imgUrl,
      activeType,
      activeSize: size[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <li className="pizza-block">
      <img
        className="pizza-block__image"
        src={imgUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map(typeId => <li
            onClick={() => setActiveType(typeId)}
            key={typeId}
            className={activeType === typeId ? 'active' : ''}>
            {TYPE_NAMES[typeId]}
          </li>
          )}
        </ul>
        <ul>
          {size.map((size , i)=> <li
            className={activeSize === i ? 'active' : ''}
            onClick={() => setActiveSize(i)}
            key={size}
          >{size} см.</li>)}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div
          onClick={onClickAdd}
          className="button button--outline button--add">
          <img src="./img/plus.svg" alt=""/>
          <span>Добавить</span>
          {cartItem ? <i>{cartItem.count}</i> : ''}
        </div>
      </div>
    </li>
  );
};

export default CardItem;
