import React, {useState} from 'react';

const Categories = () => {
  const [activeItem, setActiveItem] = useState(0);

  const categories = [
    {id: 1, name: 'Все'},
    {id: 2, name: 'Мясные',},
    {id: 3, name: 'Вегетарианские',},
    {id: 4, name: 'Гриль',},
    {id: 5, name: 'Острые'},
    {id: 6, name: 'Закрытые'},
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map(item => <li onClick={() => setActiveItem(item.id)} key={item.id} className={activeItem === item.id? 'active' : ''}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default Categories;
