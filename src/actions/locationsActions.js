import API from "../services/apiAxios";
import { SET_LOCATIONS, SET_MAP } from "../constants/constants";
import { MapStyle, google } from "../constants/MapStyle";
import MarkerIcon from "../assets/img/map-marker.png";

export function getLocationsAndSetMap(mapRef) {
  return dispatch =>
    API.get("/locations")
      .then(res => {
        dispatch({
          type: SET_LOCATIONS,
          payload: res.data,
        });
        return res.data;
      })
      .then(points => {
        return setGoogleMap(mapRef, points);
      })
      .then(map => {
        dispatch({
          type: SET_MAP,
          payload: map,
        });
      })
      .catch(err => {
        console.log(err);
      });
}

export function getLocations() {
  return dispatch =>
    API.get("/locations")
      .then(res => {
        dispatch({
          type: SET_LOCATIONS,
          payload: res.data,
        });
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
}

function setGoogleMap(mapRef, points) {
  let styledMapType = new google.maps.StyledMapType(MapStyle, { name: "Styled Map" });
  const map = new google.maps.Map(mapRef, {
    zoom: 13,
    center: { lat: 47.846663, lng: 35.124902 },
    mapTypeControl: false,
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
  points.forEach(point => {
    new google.maps.Marker({
      map: map,
      position: { lat: point.lat, lng: point.lng },
      animation: google.maps.Animation.DROP,
      title: point.name,
      icon: MarkerIcon,
    });
  });
  return map;
}
