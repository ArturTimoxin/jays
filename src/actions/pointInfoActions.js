import API from "../services/apiAxios";
import { MapStyle, google } from "../constants/MapStyle";
import { SET_POINT_DATA, SET_MINI_MAP } from "../constants/constants";
import MarkerIcon from "../assets/img/map-marker.png";

export function getPointDataAndSetMiniMap(pointID, mapRef) {
  return dispatch =>
    API.get(`/locations/${pointID}`)
      .then(res => {
        dispatch({
          type: SET_POINT_DATA,
          payload: res.data,
        });
        return res.data;
      })
      .then(pointData => {
        return setMiniGoogleMap(mapRef, pointData);
      })
      .then(map => {
        dispatch({
          type: SET_MINI_MAP,
          payload: map,
        });
      })
      .catch(err => {
        console.log(err);
      });
}

function setMiniGoogleMap(miniMapRef, pointData) {
  let styledMapType = new google.maps.StyledMapType(MapStyle, { name: "Styled Map" });
  const map = new google.maps.Map(miniMapRef, {
    zoom: 17,
    center: { lat: pointData.lat, lng: pointData.lng },
    mapTypeControl: false,
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  new google.maps.Marker({
    map: map,
    position: { lat: pointData.lat, lng: pointData.lng },
    animation: google.maps.Animation.DROP,
    title: pointData.pointName,
    icon: MarkerIcon,
  });
  return map;
}
