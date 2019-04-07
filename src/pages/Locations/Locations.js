import React, { Component } from "react";
import { MapStyle } from "./MapStyle";
import { Route } from "react-router-dom";
import { history } from "../../store/configureStore.js";
import PointInfo from "../PointInfo/PointInfo";
import MarkerIcon from "../../assets/img/map-marker.png";
// delete theese when will have server
import point1 from "../../assets/img/locations/zaporozhya_soborniy_151.jpg";
import point2 from "../../assets/img/locations/zaporozhya_soborniy_172.jpg";
import point3 from "../../assets/img/locations/zaporozhya_soborniy_175.jpg";
const google = window.google;
class Locations extends Component {
  state = {
    points: [
      {
        id: "0",
        name: "Soborniy, 151",
        imageURL: point1, // here will url
        lat: 47.845174,
        lng: 35.127215,
      },
      {
        id: "1",
        name: "Soborniy, 172",
        imageURL: point2,
        lat: 47.84129,
        lng: 35.135475,
      },
      {
        id: "2",
        name: "Soborniy, 175",
        imageURL: point3,
        lat: 47.856365,
        lng: 35.106713,
      },
    ],
    showLocationsMenu: false,
  };

  componentDidMount() {
    let styledMapType = new google.maps.StyledMapType(MapStyle, { name: "Styled Map" });
    const map = new google.maps.Map(this.map, {
      zoom: 13,
      center: { lat: 47.846663, lng: 35.124902 },
      mapTypeControl: false,
    });
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
    this.state.points.forEach(point => {
      new google.maps.Marker({
        map: map,
        position: { lat: point.lat, lng: point.lng },
        animation: google.maps.Animation.DROP,
        title: point.name,
        icon: MarkerIcon,
      });
    });
    this.setState({ map: map });
  }

  toggleLocationsMenu = () => {
    this.setState({ showLocationsMenu: !this.state.showLocationsMenu });
  };

  setMapPosition = coordsCenter => {
    this.setState({ showLocationsMenu: false });
    this.state.map.setCenter(coordsCenter);
    this.state.map.setZoom(18);
  };

  render() {
    const { points, showLocationsMenu } = this.state;
    return (
      <div className="page">
        <div className="wrapperLocationsMenu">
          <h1 className="title-page location-custom-title" onClick={this.toggleLocationsMenu}>
            LOCATIONS
            <div id="pointer" style={{ transform: showLocationsMenu ? "rotate(-90deg)" : "rotate(90deg)" }}>
              >
            </div>
          </h1>
          <div className={`locationsMenu ${showLocationsMenu ? "open-acordeon" : "close-acordeon"}`}>
            {points.map(elem => (
              <div
                key={elem.name}
                className="location-item"
                onClick={() => this.setMapPosition({ lat: elem.lat, lng: elem.lng })}
              >
                {elem.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mapWrapper">
          <div
            id="map"
            ref={node => {
              this.map = node;
            }}
          />
        </div>
        <div className="wrapperLocationsItems">
          <h2 className="titleLocation">JAYS IN ZAPORIZHIA</h2>
          <div className="locationsItems">
            {points.map(elem => (
              <div key={elem.lat} className="pointInfoWrapper" onClick={() => history.push(`/locations/${elem.id}`)}>
                <img src={elem.imageURL} alt={elem.name} />
                <div className="titleSity">JAYS Zaporizhia</div>
                <div className="pointAddress">{elem.name}</div>
              </div>
            ))}
          </div>
        </div>
        <Route path="/locations/:locationId" component={PointInfo} />
      </div>
    );
  }
}

export default Locations;
