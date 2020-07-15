export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_AMOUNT_REQUEST = 'UPDATE_AMOUNT_REQUEST';
export const UPDATE_AMOUNT_SUCCESS = 'UPDATE_AMOUNT_SUCCESS';

export function addToCartRequest(id) {
  return { type: ADD_TO_CART_REQUEST, id };
}

export function addToCartSuccess(product) {
  return { type: ADD_TO_CART_SUCCESS, product };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, id };
}

export function updateAmountRequest(id, amount) {
  return { type: UPDATE_AMOUNT_REQUEST, id, amount };
}

export function updateAmountSuccess(id, amount) {
  return { type: UPDATE_AMOUNT_SUCCESS, id, amount };
}
