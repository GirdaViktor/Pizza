import React from 'react';
import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";
import PageNotFound from "../../Pages/PageNotFound";

const RouteComponent: React.FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/cart'} element={<CartPage />}/>
        <Route path={'*'} element={<PageNotFound />}/>
      </Route>
    </Routes>
  );
};

export default RouteComponent;