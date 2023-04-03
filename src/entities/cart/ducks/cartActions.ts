import {Product} from "../../product/api/models/Product";
import {CartActions} from "./cartActionTypes";

export const addToCart = (payload: { productId: string }) => ({
  type: CartActions.ADD_TO_CART_REQUEST,
  payload,
});

export const addToCartSuccess = (payload: { productId: Product['id'], amount: number }) => ({
  type: CartActions.ADD_TO_CART_SUCCESS,
  payload
});


export const removeFromCart = (payload: { productId: string }) => ({
  type: CartActions.REMOVE_FROM_CART_REQUEST,
  payload,
});

export const removeFromCartSuccess = (payload: { productId: Product['id'], amount: number }) => ({
  type: CartActions.REMOVE_FROM_CART_SUCCESS,
  payload
});
