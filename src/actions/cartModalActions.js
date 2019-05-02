import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../constants/constants";

export function addProductToCart(oldCart, product, oldTotalOrderPrice = 0, quantity = 1) {
  let newCart = oldCart.slice(0);
  let alreadyHasProduct = oldCart.find(item => item._id === product._id);
  if (alreadyHasProduct) {
    newCart.forEach(item => {
      if (item._id === alreadyHasProduct._id) {
        item.quantity += Number(quantity);
      }
    });
  } else {
    let productWithQuantity = { ...product, quantity: Number(quantity) };
    newCart.push(productWithQuantity);
  }
  let newTotalOrderPrice = Number(oldTotalOrderPrice) + Number(product.price) * Number(quantity);
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: { newCart, newTotalOrderPrice },
    });
  };
}

export function removeProductFromCart(oldCart, product, totalOrderPrice) {
  let newCart = oldCart.filter(elem => elem._id !== product._id);
  let newTotalOrderPrice = totalOrderPrice - product.price * product.quantity;
  return dispatch => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: { newCart, newTotalOrderPrice },
    });
  };
}
