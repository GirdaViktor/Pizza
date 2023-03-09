import React, {useEffect, useState} from 'react';
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import ContainerItems from "../containerIItems/ContainerItems";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {setFilters} from "../../redux/slices/filterSlice";
import {sortList} from "../sort/enum";
import {fetchDataItems, setData} from "../../redux/slices/dataSlice";

const HomePages = () => {
  const categoryItem = useSelector(state => state.filter.categoryId);
  const sortItem = useSelector(state => state.filter.sort);
  const currentPage = useSelector(state => state.filter.pageCount);
  const navigate = useNavigate();
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

  const fetchData = async () => {
    const categoryUrl = categoryItem > 0 ? `category=${categoryItem}` : '';

    dispatch(fetchDataItems({
      currentPage,
      categoryUrl,
      sortItem
    }));
  };

  useEffect(() => {
    fetchData();
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
      <ContainerItems />
    </>
  );
};

export default HomePages;
