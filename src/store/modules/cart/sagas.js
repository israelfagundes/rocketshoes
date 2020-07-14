import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { ADD_TO_CART_REQUEST, addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest(ADD_TO_CART_REQUEST, addToCart)]);