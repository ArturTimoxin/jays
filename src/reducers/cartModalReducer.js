import * as cartModalConst from "../constants/constants";

const initialState = {
  cart: [],
  totalOrderPrice: 0,
  showCartModal: false,
};

export function cartModalReducer(state = initialState, action) {
  switch (action.type) {
    case cartModalConst.ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cart: action.payload.newCart,
        totalOrderPrice: action.payload.newTotalOrderPrice,
        showCartModal: true,
      };
    }
    case cartModalConst.TOGGLE_SHOW_CART_MODAL: {
      return { ...state, showCartModal: !state.showCartModal };
    }
    case cartModalConst.REMOVE_PRODUCT_FROM_CART: {
      return { ...state, cart: action.payload.newCart, totalOrderPrice: action.payload.newTotalOrderPrice };
    }
    default:
      return state;
  }
}
