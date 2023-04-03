import {AppState} from "../../../app/store/appReducer";
import {Product} from "../api/models/Product";

export const productList = (state: AppState) => Object.values(state.product.products)
export const getProductById = (productId: Product['id']) => (state: AppState) => state.product.products[productId]
