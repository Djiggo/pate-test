import {all, spawn} from 'redux-saga/effects';
import {productActionWatcher} from "../../entities/product/ducks/productSagas";
import {cartActionWatcher} from "../../entities/cart/ducks/cartSagas";

export function* rootSaga() {
  yield all([
    spawn(productActionWatcher),
    spawn(cartActionWatcher)
  ])
}
