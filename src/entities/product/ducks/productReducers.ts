import {AllProductActions, ProductActions, ProductState} from "./productActionTypes";

const initialState: ProductState = {
  products: {}
}

export const product = (state = initialState, action: AllProductActions) => {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCTS_SUCCESS:
      return {...state, products: action.payload};
    default:
      return state;
  }
}
