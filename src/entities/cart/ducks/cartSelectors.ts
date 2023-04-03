import {AppState} from "../../../app/store/appReducer";
import {Product} from "../../product/api/models/Product";

export const getAmountOfProductInCart = (productId: Product['id']) => (state: AppState) => state.cart.productsInCart[productId] || 0;
export const getProductCartIsLoading = (productId: Product['id']) => (state: AppState) => state.cart.productsIsLoading.includes(productId) || false;

