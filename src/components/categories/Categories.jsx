import React from 'react';
import {setCategoryId} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const Categories = () => {
  const categoryItem = useSelector(state => state.filter.categoryId);
  const dispatch = useDispatch();

  const onChangeCategory = (value) => {
    dispatch(setCategoryId(value))
  };

  const categories = [
    {id: 0, name: 'Все'},
    {id: 1, name: 'Мясные',},
    {id: 2, name: 'Вегетарианские',},
    {id: 3, name: 'Гриль',},
    {id: 4, name: 'Острые'},
    {id: 5, name: 'Закрытые'},
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map(item =>
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
