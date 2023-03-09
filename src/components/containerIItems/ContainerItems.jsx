import React from 'react';
import { useSelector } from "react-redux";
import CardItem from "../cardItem/CardItem";
import Pagination from "../pagination/pagination";
import { selectorData } from "../../redux/slices/dataSlice";
import { selectorFilter } from "../../redux/slices/filterSlice";

const ContainerItems = () => {
  const searchItem = useSelector(selectorFilter).searchValue;
  const {items, status} = useSelector(selectorData);

  return (
    <>
      {status === 'loading' ? <div>Идет загрузка данных</div> : ''}
      {status === 'error' ? <div>Ошибка при получиении данных</div> : ''}
      {status === 'success' ?
        <>
          <ul className="content__items">
            {
              items
                .filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()) ? true : false)
                .map((item) => (<CardItem {...item} key={item.id}/>))
            }
          </ul>

          <Pagination />
        </>
      : ''}
    </>
  );
};

export default ContainerItems;
