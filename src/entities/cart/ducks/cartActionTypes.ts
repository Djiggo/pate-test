import {Product} from "../../product/api/models/Product";

export type CartState = {
  productsInCart: Record<Product['id'], number>;
  productsIsLoading: Product['id'][];
};

export enum CartActions {
  ADD_TO_CART_REQUEST = '@@cart/ADD_TO_CART_REQUEST',
  ADD_TO_CART_SUCCESS = '@@cart/ADD_TO_CART_SUCCESS',
  REMOVE_FROM_CART_REQUEST = '@@cart/REMOVE_FROM_CART_REQUEST',
  REMOVE_FROM_CART_SUCCESS = '@@cart/REMOVE_FROM_CART_SUCCESS',

}


export type AddToCartRequest = {
  type: CartActions.ADD_TO_CART_REQUEST;
  payload: { productId: Product['id'] };
}

export type AddToCartSuccess = {
  type: CartActions.ADD_TO_CART_SUCCESS;
  payload: { productId: Product['id'], amount: number };
}


export type RemoveFromCartRequest = {
  type: CartActions.REMOVE_FROM_CART_REQUEST;
  payload: { productId: Product['id'] };
}

export type RemoveFromCartSuccess = {
  type: CartActions.REMOVE_FROM_CART_SUCCESS;
  payload: { productId: Product['id'], amount: number };
}


export type AllCartActions = AddToCartRequest | AddToCartSuccess | RemoveFromCartRequest | RemoveFromCartSuccess;
