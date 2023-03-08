import React, {useEffect, useState} from 'react';
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import ContainerItems from "../containerIItems/ContainerItems";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {setFilters} from "../../redux/slices/filterSlice";
import {sortList} from "../sort/enum";

const HomePages = () => {
  const categoryItem = useSelector(state => state.filter.categoryId);
  const sortItem = useSelector(state => state.filter.sort);
  const currentPage = useSelector(state => state.filter.pageCount);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let [items, setItems] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(item => item.sort === params.sortItem);

      dispatch(setFilters({
        ...params,
        sort
      }))
    }
  },[]);

  useEffect(() => {
    setIsLoading(true);
    const categoryUrl = categoryItem > 0 ? `category=${categoryItem}` : '';

    axios.get(`https://63ff64b6571200b7b7dcf348.mockapi.io/items?page=${currentPage}&limit=8&${categoryUrl}&sortBy=${sortItem.sort}`)
      .then(r => {
        setTimeout(() => {
          setItems(r.data);
          setIsLoading(false);
        }, 500)
      } );
    }, [categoryItem, sortItem, currentPage]);

  useEffect(() => {
    const url = qs.stringify({
      categoryItem,
      sortItem: sortItem.sort,
      currentPage
    });

    navigate(`?${url}`);
  },[categoryItem, sortItem, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <ContainerItems items={items} isLoading={isLoading} />
    </>
  );
};

export default HomePages;
