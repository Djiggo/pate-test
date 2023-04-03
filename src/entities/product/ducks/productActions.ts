import {ProductActions} from "./productActionTypes";
import {Product} from "../api/models/Product";

export const fetchProducts = () => ({
  type: ProductActions.FETCH_PRODUCTS_REQUEST,
});


export const fetchProductsSuccess = (payload: Record<Product['id'], Product>) => ({
  type: ProductActions.FETCH_PRODUCTS_SUCCESS,
  payload
});


