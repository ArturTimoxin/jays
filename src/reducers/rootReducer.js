import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { locationsReducer } from "./locationsReducer";
import { pointInfoReducer } from "./pointInfoReducer";
import { shopReducer } from "./shopReducer";
import { productPageReducer } from "./productPageReducer";
import { cartModalReducer } from "./cartModalReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  locations: locationsReducer,
  pointInfo: pointInfoReducer,
  shop: shopReducer,
  productPage: productPageReducer,
  cartModal: cartModalReducer,
});
