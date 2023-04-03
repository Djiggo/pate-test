import React from 'react';
import './styles/index.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProductsPage} from "../pages/ProductsPage";
import {Provider} from 'react-redux';
import {store} from './store/configureStore';

export const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<ProductsPage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
}
