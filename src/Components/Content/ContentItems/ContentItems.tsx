import React from 'react';
import {useSelector} from "react-redux";
import {dataSelector} from "../../../Redux/dataSlice";
import Card from "../../Card/Card";

const ContentItems:React.FC = () => {
  const { items } = useSelector(dataSelector);

  return (
    <div className="content__items">
      {items.map(item => <Card {...item} key={item.id}/>)}
    </div>
  );
};

export default ContentItems;