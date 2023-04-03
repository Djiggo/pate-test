import {put, takeLatest} from "redux-saga/effects";
import {ProductActions, ProductsFetch} from "./productActionTypes";
import {Product} from "../api/models/Product";
import {fetchProductsSuccess} from "./productActions";


function* fetchProductsSaga(action: ProductsFetch) {

  // Mock BE data

  const products: Record<Product['id'], Product> = {
    "1": {
      id: "1",
      photos: ["/demo/product_image1.png"],
      price: 1590,
      title: "LED Телевизор HD Ready LG 32LJ510U",
      rating: 4,
      ratingVotes: 25,
      availableInStock: 5,
      variants: [{id: "1", label: "41"}, {id: "2", label: "42"}, {id: "3", label: "43"}],
      promo: {badge: "гарантия лучших цен", discountPercent: 25, previousPrice: 1590}
    },
    "2": {
      id: "2",
      photos: ["/demo/product_image2.png"],
      price: 1190,
      title: "Чуни (домашние тапочки) Овечкинъ с подошвой бежевые 36 RU",
      rating: 3,
      ratingVotes: 15,
      availableInStock: 5,
      promo: {badge: "гарантия лучших цен", discountPercent: 25, previousPrice: 1590}

    },
    "3": {
      id: "3",
      photos: ["/demo/product_image2.png"],
      price: 1190,
      title: "Чуни (домашние тапочки) Овечкинъ с подошвой бежевые 36 RU",
      availableInStock: 5,
      promo: {badge: "гарантия лучших цен", discountPercent: 25, previousPrice: 1590}

    },
    "4": {
      id: "4",
      photos: ["/demo/product_image1.png"],
      price: 1190,
      title: "Чуни (домашние тапочки) Овечкинъ с подошвой бежевые 36 RU",
      rating: 3,
      ratingVotes: 15,
      availableInStock: 5,
    },
    "5": {
      id: "5",
      photos: ["/demo/product_image2.png"],
      price: 1190,
      title: "Чуни (домашние тапочки) Овечкинъ с подошвой бежевые 36 RU",
      rating: 3,
      ratingVotes: 15,
      availableInStock: 5,
      promo: {badge: "гарантия лучших цен", discountPercent: 25, previousPrice: 1590}

    },
  };


  yield put(fetchProductsSuccess(products))
}

export function* productActionWatcher() {
  yield takeLatest(ProductActions.FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
