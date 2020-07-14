export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

export function addToCartRequest(id) {
  return { type: ADD_TO_CART_REQUEST, id };
}

export function addToCartSuccess(product) {
  return { type: ADD_TO_CART_SUCCESS, product };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, id };
}

export function updateAmount(id, amount) {
  return { type: UPDATE_AMOUNT, id, amount };
}
