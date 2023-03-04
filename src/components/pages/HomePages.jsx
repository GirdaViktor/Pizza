import React, {useEffect, useState} from 'react';
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import ContainerItems from "../containerIItems/ContainerItems";

const HomePages = () => {
  const [categoryItem, setCategoryItem] = useState(0);
  const [sortItem, setSortItem] = useState( {name: 'популярности', sort: 'rating'});
  let [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    const categoryUrl = categoryItem > 0 ? `category=${categoryItem}` : '';
    fetch(
      `https://63ff64b6571200b7b7dcf348.mockapi.io/items?${categoryUrl}&sortBy=${sortItem.sort}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((arr) => {
        setTimeout(() => {
          setItems(arr);
          setIsLoading(false);
          }, 500)
      })
      .catch(error => console.log(error));
    }, [categoryItem, sortItem]);


  return (
    <>
      <div className="content__top">
        <Categories value={categoryItem} onChangeCategory={(value) => setCategoryItem(value)}/>
        <Sort value={sortItem} onChangeSort={(value) => setSortItem(value)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ContainerItems items={items} isLoading={isLoading}/>
    </>
  );
};

export default HomePages;
