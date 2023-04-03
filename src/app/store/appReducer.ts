import {combineReducers} from 'redux';
import {product} from "../../entities/product/ducks/productReducers";
import {ProductState} from "../../entities/product/ducks/productActionTypes";
import {CartState} from "../../entities/cart/ducks/cartActionTypes";
import {cart} from '../../entities/cart/ducks/cartReducers';


export type AppState = {
  product: ProductState
  cart: CartState
}

export const appReducer = () => combineReducers({
  product,
  cart,
});

