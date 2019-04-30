import * as shopConst from "../constants/constants";

const initialState = {
  products: [],
};

export function shopReducer(state = initialState, action) {
  switch (action.type) {
    case shopConst.SET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    default:
      return state;
  }
}
