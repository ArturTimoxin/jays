import * as pointPageConst from "../constants/constants";

const initialState = {
  productData: {
    _id: "",
    name: "",
    price: "",
    weight: "",
    mainPhoto: "",
    otherPhotos: [],
    type: "",
    region: "",
    height: "",
    processing: "",
    assasment: "",
    harvestYear: "",
    article: "",
  },
  quantityValue: 1,
};

export function productPageReducer(state = initialState, action) {
  switch (action.type) {
    case pointPageConst.SET_PRODUCT_DATA: {
      return { ...state, productData: action.payload };
    }
    case pointPageConst.SET_QUANTITY: {
      return { ...state, quantityValue: action.payload };
    }
    default:
      return state;
  }
}
