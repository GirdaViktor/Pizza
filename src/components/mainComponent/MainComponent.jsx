import React from 'react';
import HomePages from "../pages/HomePages";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/NotFound";
import CartPage from "../pages/CartPage";

const MainComponent = () => {
  return (
    <div className="content">
      <div className="container">
        <Routes>
          <Route path={'/'} element={<HomePages/>}/>
          <Route path={'/cart'} element={<CartPage/>}/>
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default MainComponent;
