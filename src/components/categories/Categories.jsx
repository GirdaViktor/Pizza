import React from 'react';

const Categories = ({value, onChangeCategory}) => {
  console.log(value);

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
            className={value === item.id? 'active' : ''}
          >{item.name}</li>)}
      </ul>
    </div>
  );
};

export default Categories;
