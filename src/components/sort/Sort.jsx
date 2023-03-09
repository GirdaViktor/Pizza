import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import { SORT_LIST } from "./Sort.enum";
import { selectorFilter } from "../../redux/slices/filterSlice";

const Sort = () => {
  const [isSortPopup, setIsSortPopup] = useState(false);
  const sortItem = useSelector(selectorFilter).sort;
  const dispatch = useDispatch();

  const onChangeSort = (value) => {
    setIsSortPopup(false);
    dispatch(setSort(value));
  };

  return (
    <div className="sort">
      <div className="sort__label" onClick={() => setIsSortPopup(!isSortPopup)}>
        <img src="./img/triangle-up.svg" alt=""/>
        <b>Сортировка по:</b>
        <span>{sortItem.name}</span>
      </div>
      {isSortPopup ? (<div className="sort__popup">
        <ul>
          {SORT_LIST.map((item, i) => <li
            key={i}
            className={sortItem === item.sort ? 'active' : ''}
            onClick={() => {
              onChangeSort(item);
            }}
          >{item.name}</li>)}
        </ul>
      </div>) : ''}
    </div>
  );
};

export default Sort;
