import React, { Component } from "react";
import { history } from "../../store/configureStore.js";
import { connect } from "react-redux";
import { TOGGLE_LOCATIONS_MENU } from "../../constants/constants";
import { getLocationsAndSetMap } from "../../actions/locationsActions";

class Locations extends Component {
  componentDidMount() {
    this.props.getLocationsAndSetMap(this.map);
  }

  setMapPosition = coordsCenter => {
    this.props.toggleLocationsMenu();
    this.props.map.setCenter(coordsCenter);
    this.props.map.setZoom(18);
  };

  render() {
    const { points, showLocationsMenu, toggleLocationsMenu } = this.props;
    return (
      <div className="page">
        <div className="wrapperLocationsMenu">
          <h1 className="page-section-text location-custom-title" onClick={toggleLocationsMenu}>
            LOCATIONS
            <div id="pointer" style={{ transform: showLocationsMenu ? "rotate(-90deg)" : "rotate(90deg)" }}>
              >
            </div>
          </h1>
          <div className={`locationsMenu ${showLocationsMenu ? "open-acordeon" : "close-acordeon"}`}>
            {points.map(elem => (
              <div
                key={elem._id}
                className="location-item"
                onClick={() => this.setMapPosition({ lat: elem.lat, lng: elem.lng })}
              >
                {elem.pointName}
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
          <h2 className="titleLocation">JAYS POINTS</h2>
          <div className="locationsItems">
            {points.map(elem => (
              <div key={elem._id} className="pointInfoWrapper" onClick={() => history.push(`/locations/${elem._id}`)}>
                <img src={elem.imageURL} alt={elem.pointName} />
                <div className="titleSity">JAYS</div>
                <div className="pointAddress">{elem.pointName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    points: store.locations.points,
    showLocationsMenu: store.locations.showLocationsMenu,
    map: store.locations.map,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLocationsMenu: () => dispatch({ type: TOGGLE_LOCATIONS_MENU }),
    getLocationsAndSetMap: mapRef => dispatch(getLocationsAndSetMap(mapRef)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Locations);
