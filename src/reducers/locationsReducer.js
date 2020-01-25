import * as locationsConst from "../constants/constants";

const initialState = {
  points: [],
  showLocationsMenu: false,
  map: {},
};

export function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case locationsConst.TOGGLE_LOCATIONS_MENU: {
      return { ...state, showLocationsMenu: !state.showLocationsMenu };
    }
    case locationsConst.SET_LOCATIONS: {
      return { ...state, points: action.payload };
    }
    case locationsConst.SET_MAP: {
      return { ...state, map: action.payload };
    }
    default:
      return state;
  }
}
