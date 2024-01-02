import React, { useState } from 'react';

const Categories: React.FC = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [categoryId, setCategoryId] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) =>
          <li
            className={categoryId === i ? "active" : ''}
            onClick={()=>setCategoryId(i)}
            key={i}
          >{item}</li>)}
      </ul>
    </div>
  );
};

export default Categories;