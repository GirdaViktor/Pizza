import React from 'react';
import Categories from "../../Categories/Categories";
import Sort from "../../Sort/Sort";

const ContentTop:React.FC = () => {
  return (
    <div className="content__top">
      <Categories />
      <Sort />
    </div>
  );
};

export default ContentTop;