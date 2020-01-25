import API from "../services/apiAxios";
import { SET_PRODUCTS } from "../constants/constants";

export function getProducts() {
  return dispatch => {
    API.get("/shop")
      .then(res => {
        dispatch({
          type: SET_PRODUCTS,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
