import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import {appReducer} from "./appReducer";
import {rootSaga} from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(appReducer(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
