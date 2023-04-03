import {AllCartActions, CartActions, CartState} from "./cartActionTypes";

const initialState: CartState = {
  productsInCart: {},
  productsIsLoading: []
}

export const cart = (state = initialState, action: AllCartActions) => {
  console.log(action.type)
  switch (action.type) {
    case CartActions.ADD_TO_CART_REQUEST:
    case CartActions.REMOVE_FROM_CART_REQUEST:

      const productsIsLoading = [...state.productsIsLoading, action.payload.productId];
      return {...state, productsIsLoading};

    case CartActions.ADD_TO_CART_SUCCESS:
    case CartActions.REMOVE_FROM_CART_SUCCESS:
      console.log(action)
      let productsIsLoadingCloned = [...state.productsIsLoading];
      const productsInCartCloned = {...state.productsInCart}

      productsInCartCloned[action.payload.productId] = action.payload.amount;
      const index = productsIsLoadingCloned.indexOf(action.payload.productId)

      if (index >= 0) {
        productsIsLoadingCloned = productsIsLoadingCloned.splice(index, 0);
      }
      return {...state, productsInCart: productsInCartCloned, productsIsLoading: productsIsLoadingCloned};

    default:
      return state;
  }
}
