import React from 'react';
import { selectorFilter, setCategoryId } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES_LIST } from './Categories.enum';

const Categories = () => {
  const categoryItem = useSelector(selectorFilter).categoryId;
  const dispatch = useDispatch();

  const onChangeCategory = (value) => {
    dispatch(setCategoryId(value))
  };

  return (
    <div className="categories">
      <ul>
        {CATEGORIES_LIST.map(item =>
          <li
            onClick={() => onChangeCategory(item.id)}
            key={item.id}
            className={categoryItem === item.id ? 'active' : ''}
          >{item.name}</li>)}
      </ul>
    </div>
  );
};

export default Categories;
