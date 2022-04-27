import React, { useReducer, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DispatchContext, StateContext, defaultStore } from './store'
import { stateReducer } from './reducer'

import Layout from './layout';
import { Home, Basket, MyOrders, BasicInformation, ChangePassword, ProductDetail } from './pages'
import ROUTES from './routes';

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultStore)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Layout />}>
              <Route index element={<Home />} />
              <Route element={<Basket />} path={ROUTES.BASKET} />
              <Route path={`${ROUTES.PRODUCT_DETAIL}/:id`} element={<ProductDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
