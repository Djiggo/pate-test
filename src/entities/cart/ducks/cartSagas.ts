import {delay, put, select, takeLatest} from "redux-saga/effects";
import {AddToCartRequest, CartActions} from "./cartActionTypes";
import {addToCartSuccess, removeFromCartSuccess} from "./cartActions";
import {getAmountOfProductInCart} from "./cartSelectors";
import {AppState} from "../../../app/store/appReducer";


function* addToCartSaga(action: AddToCartRequest) {


  yield delay(500)

  // Mock BE answer
  const amountInCart: number = yield select(getAmountOfProductInCart(action.payload.productId));

  yield put(addToCartSuccess({productId: action.payload.productId, amount: amountInCart + 1}))
}


function* removeFromCartSaga(action: AddToCartRequest) {


  yield delay(500)

  // Mock BE answer
  const amountInCart: number = yield select(getAmountOfProductInCart(action.payload.productId));
  let newAmount = amountInCart - 1;

  if (newAmount < 0) {
    newAmount = 0;
  }

  yield put(removeFromCartSuccess({productId: action.payload.productId, amount: newAmount}))
}

export function* cartActionWatcher() {
  yield takeLatest(CartActions.ADD_TO_CART_REQUEST, addToCartSaga);
  yield takeLatest(CartActions.REMOVE_FROM_CART_REQUEST, removeFromCartSaga);
}
