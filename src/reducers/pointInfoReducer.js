import * as pointInfoConst from "../constants/constants";

const initialState = {
  pointData: {
    _id: "",
    name: "",
    imageURL: "",
    lat: "",
    lng: "",
    mainImageURL: "",
    pointName: "",
    pointDescription: "",
    neighborhoodPoints: [],
    shopData: {
      address: "",
      tel: "",
      workTime: "",
    },
  },
  map: {},
};

export function pointInfoReducer(state = initialState, action) {
  switch (action.type) {
    case pointInfoConst.SET_POINT_DATA: {
      return { ...state, pointData: action.payload };
    }
    case pointInfoConst.SET_MINI_MAP: {
      return { ...state, map: action.payload };
    }
    default:
      return state;
  }
}
