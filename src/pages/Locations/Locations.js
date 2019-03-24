import React, { Component } from "react";
const google = window.google;
const points = [
  { name: "Soborniy, 151", lat: 47.84582, lng: 35.125654 },
  { name: "Soborniy, 172", lat: 47.841427, lng: 35.135292 },
  { name: "Soborniy, 175", lat: 47.856248, lng: 35.106643 },
];
class Locations extends Component {
  // https://developers.google.com/maps/documentation/javascript/markers
  componentDidMount() {
    const map = new google.maps.Map(this.map, {
      zoom: 14,
      center: { lat: 47.846663, lng: 35.124902 },
    });
    points.forEach(point => {
      new google.maps.Marker({
        map: map,
        position: { lat: point.lat, lng: point.lng },
        title: point.name,
      });
    });
  }

  render() {
    return (
      <div className="page">
        <h2 class="title-page">Locations</h2>
        <div className="mapWrapper">
          <div
            id="map"
            ref={node => {
              this.map = node;
            }}
          />
        </div>
      </div>
    );
  }
}

export default Locations;
