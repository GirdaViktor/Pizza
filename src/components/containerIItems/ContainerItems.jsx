import React, {useContext} from 'react';
import CardItem from "../cardItem/CardItem";
import {SearchContext} from "../../App";
import Pagination from "../pagination/pagination";

const ContainerItems = ({items, isLoading }) => {
  const { searchItem } = useContext(SearchContext);

  return (
    <>
      <ul className="content__items">
        {
          isLoading ? <div> 'Идет загрузка'</div> :
          items
            .filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()) ? true : false)
            .map((item) => (<CardItem {...item} key={item.id}/>))
        }
      </ul>
      <Pagination/>
    </>
  );
};

export default ContainerItems;
