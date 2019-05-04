import * as cartModalConst from "../constants/constants";

const initialState = {
  cart: [],
  totalOrderPrice: 0,
  showCartModal: false,
  showCartIcon: false,
  redirectToMainPage: true,
};

export function cartModalReducer(state = initialState, action) {
  switch (action.type) {
    case cartModalConst.ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cart: action.payload.newCart,
        totalOrderPrice: action.payload.newTotalOrderPrice,
        showCartModal: true,
        showCartIcon: true,
        redirectToMainPage: false,
      };
    }
    case cartModalConst.TOGGLE_SHOW_CART_MODAL: {
      return { ...state, showCartModal: !state.showCartModal };
    }
    case cartModalConst.REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: action.payload.newCart,
        totalOrderPrice: action.payload.newTotalOrderPrice,
        showCartIcon: action.payload.newCart.lenght > 0,
        redirectToMainPage: action.payload.newCart.lenght === 0,
      };
    }
    case cartModalConst.TOGGLE_SHOW_CART_ICON: {
      return {
        ...state,
        showCartIcon: !state.showCartIcon,
      };
    }
    case cartModalConst.CLEAR_CART: {
      return {
        ...state,
        showCartIcon: !state.showCartIcon,
        cart: [],
        totalOrderPrice: 0,
      };
    }
    default:
      return state;
  }
}
