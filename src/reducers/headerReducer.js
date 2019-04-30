import * as headerConst from "../constants/constants";

const initialState = {
  showMenu: false,
  blackLinks: false,
  blackMenuLogo: false,
  linksInfo: [
    { link: "/philosophy", name: "PHILOSOPHY" },
    { link: "/locations", name: "LOCATIONS" },
    { link: "/shop", name: "SHOP" },
    { link: "/contact", name: "CONTACT" },
  ],
};

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case headerConst.TOGGLE_SHOW_MENU: {
      return { ...state, showMenu: !state.showMenu };
    }
    case headerConst.HOME_BLACK_COLOR_LINKS: {
      return { ...state, blackLinks: true, blackMenuLogo: true };
    }
    case headerConst.HOME_WHITE_COLOR_LINKS: {
      return { ...state, blackLinks: false, blackMenuLogo: false };
    }
    default:
      return state;
  }
}
