export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';

export function addToCart(product) {
  return { type: ADD_TO_CART, product };
}

export function removeFromCart(id) {
  return { type: REMOVE_FROM_CART, id };
}

export function updateAmount(id, amount) {
  return { type: UPDATE_AMOUNT, id, amount };
}
