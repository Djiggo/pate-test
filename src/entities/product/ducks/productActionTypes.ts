import {Product} from "../api/models/Product";


export type ProductState = {
  products: Record<Product['id'], Product>;
};

export enum ProductActions {
  FETCH_PRODUCTS_REQUEST = '@@product/FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = '@@product/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = '@@product/FETCH_PRODUCTS_ERROR',
}


export type ProductsFetch = {
  type: ProductActions.FETCH_PRODUCTS_REQUEST;
}

export type ProductsFetchSuccess = {
  type: ProductActions.FETCH_PRODUCTS_SUCCESS;
  payload: Record<Product['id'], Product>;
}


export type AllProductActions = ProductsFetch | ProductsFetchSuccess;
