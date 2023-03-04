import React, {useEffect, useState} from 'react';
import CardItem from "../cardItem/CardItem";

const ContainerItems = ({items, isLoading}) => {
  return (
    <ul className="content__items">
      {
        isLoading ? <div> 'Идет загрузка'</div> :
        items.map((item) => (<CardItem {...item} key={item.id}/>))
      }
    </ul>
  );
};

export default ContainerItems;
