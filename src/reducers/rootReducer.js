import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { locationsReducer } from "./locationsReducer";
import { pointInfoReducer } from "./pointInfoReducer";
export const rootReducer = combineReducers({
  header: headerReducer,
  locations: locationsReducer,
  pointInfo: pointInfoReducer,
});
