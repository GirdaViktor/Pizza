import React, {useEffect, useState} from 'react';
import CardItem from "../cardItem/CardItem";

const ContainerItems = () => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://63ff64b6571200b7b7dcf348.mockapi.io/items')
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setItems(arr);
      });
    }, []);

  return (
    <ul className="content__items">
      {items.map((item) => (<CardItem {...item} key={item.id}/>))}
    </ul>
  );
};

export default ContainerItems;
