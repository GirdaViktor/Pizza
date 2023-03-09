import React, {useContext} from 'react';
import {useSelector} from "react-redux";
import CardItem from "../cardItem/CardItem";
import Pagination from "../pagination/pagination";
import {SearchContext} from "../../App";

const ContainerItems = () => {
  const { searchItem } = useContext(SearchContext);
  const {items, status} = useSelector(state => state.data);

  return (
    <>
      <ul className="content__items">
        {
          status === 'loading'
            ? <div>Идет загрузка данных</div>
            : ''
        }

        {
          status === 'success'
            ? items
            .filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()) ? true : false)
            .map((item) => (<CardItem {...item} key={item.id}/>))
            : ''
        }

        {
          status === 'error'
            ? <div>Ошибка при получиении данных</div>
            : ''
        }
      </ul>
      <Pagination/>
    </>
  );
};

export default ContainerItems;
