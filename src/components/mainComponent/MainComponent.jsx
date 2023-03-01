import React from 'react';
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import ContainerItems from "../containerIItems/ContainerItems";

const MainComponent = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories/>
          <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <ContainerItems/>
      </div>
    </div>
  );
};

export default MainComponent;
