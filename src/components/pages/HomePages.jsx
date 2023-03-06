import React, {useEffect, useState} from 'react';
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import ContainerItems from "../containerIItems/ContainerItems";
import {useSelector} from "react-redux";

const HomePages = () => {
  const categoryItem = useSelector(state => state.filter.categoryId);
  const sortItem = useSelector(state => state.filter.sort);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const categoryUrl = categoryItem > 0 ? `category=${categoryItem}` : '';
    fetch(
      `https://63ff64b6571200b7b7dcf348.mockapi.io/items?page=${currentPage}&limit=8&${categoryUrl}&sortBy=${sortItem.sort}`
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
    }, [categoryItem, sortItem, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ContainerItems items={items} isLoading={isLoading} setPage={setCurrentPage} />
    </>
  );
};

export default HomePages;
