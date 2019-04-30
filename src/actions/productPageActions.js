import API from "../services/apiAxios";
import { SET_PRODUCT_DATA } from "../constants/constants";

export function getProductData(id) {
  return dispatch => {
    API.get(`/shop/${id}`)
      .then(res => {
        dispatch({
          type: SET_PRODUCT_DATA,
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
