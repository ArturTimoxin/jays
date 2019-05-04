import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "../../store/configureStore.js";
import { getPointDataAndSetMiniMap } from "../../actions/pointInfoActions.js";

class PointInfo extends Component {
  componentDidMount() {
    this.props.getPointDataAndSetMiniMap(this.props.match.params.locationId, this.miniMap);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.locationId !== this.props.match.params.locationId) {
      this.props.getPointDataAndSetMiniMap(nextProps.match.params.locationId, this.miniMap);
    }
  }

  render() {
    const {
      mainImageURL,
      pointName,
      pointDescription,
      neighborhoodPoints,
      shopData: { address, tel, workTime },
    } = this.props.pointData;
    return (
      <div className="page">
        <div id="mainImagePoint" style={{ backgroundImage: "url(" + mainImageURL + ")" }} />
        <div className="infoPoint">
          <div className="pointDataSection">
            <article className="titleAndDescriptionWrapper">
              <h1 className="page-section-text left-margin-none">{pointName}</h1>
              <hr />
              <section>{pointDescription}</section>
            </article>
            <div className="page-section-text left-margin-none">Neighborhood Points:</div>
            <hr />
            <div className="locationsItems">
              {neighborhoodPoints.map(elem => (
                <div key={elem._id} className="pointInfoWrapper" onClick={() => history.push(`/locations/${elem._id}`)}>
                  <img src={elem.imageURL} alt={elem.name} />
                  <div className="titleSity">JAYS Zaporizhia</div>
                  <div className="pointAddress">{elem.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="shopDataSection">
            <h2 className="page-section-text left-margin-none">Shop Data</h2>
            <hr />
            <div className="infoAddress">
              <div className="subtitle">Address:</div>
              <div className="info">{address}</div>
              <div className="miniMapWrapper">
                <div
                  id="miniMap"
                  ref={node => {
                    this.miniMap = node;
                  }}
                />
              </div>
            </div>
            <hr />
            <div className="infoTel">
              <div className="subtitle">Tel:</div>
              <div className="info">{tel}</div>
            </div>
            <hr />
            <div className="workTime">
              <div className="subtitle">Working Time:</div>
              <div className="info">{workTime}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    pointData: store.pointInfo.pointData,
    map: store.pointInfo.map,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPointDataAndSetMiniMap: (pointID, mapRef) => dispatch(getPointDataAndSetMiniMap(pointID, mapRef)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PointInfo);
