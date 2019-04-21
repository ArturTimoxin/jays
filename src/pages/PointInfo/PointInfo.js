import React, { Component } from "react";
import { history } from "../../store/configureStore.js";
import { MapStyle, google } from "../../constants/MapStyle";
import exampleImg from "../../assets/img/point/1_1920.jpg";
import exampleMiniImg from "../../assets/img/locations/zaporozhya_soborniy_172.jpg";
import MarkerIcon from "../../assets/img/map-marker.png";
class PointInfo extends Component {
  state = {
    pointData: {
      mainPointImageURL: exampleImg,
      pointName: "Jays Zaporizhia: Soborniy 151",
      pointDescription:
        "This is our European flagship store. For this store we chose an area called Kreuzber, a multicultural melting pot of artists, hipsters and all things Berlin. In this vast 150m² open space, we showed our respect to the greats of German design by creating a shop interior in the style of iconic Braun designer Dieter Rams.  Our seating area, bean cellar, shop counter are all a homage to his amazing craft and ingenuity. The store also has a large kitchen, which is a new challenge for our brand.  We hired two young chefs, Tyler from America, and Paulo from Italy, to cook locally grown, fresh, simple and healthy breakfast and lunch menu. As for coffee, %Arabica Berlin is filled with our usual passion for serving the best beans with the upmost dedication.  Our founder, Kenneth owns a coffee farm in Hawaii, and we trade green beans from all over the world.  We even offer beans from Ninety Plus Coffee, who are creating barista champions in so many countries the world over. This store is filled with our passion for coffee, food, design, and seeing the world. Please visit us and let’s ”See the World Through Coffee” together",
      neighborhoodPoints: [
        { id: "1", name: "Soborniy, 172", imageURL: exampleMiniImg },
        { id: "2", name: "Soborniy, 175", imageURL: exampleMiniImg },
      ],
      shopData: {
        address: "Zaporizhia, Soborniy 151",
        mapInfo: {
          lat: 47.845174,
          lng: 35.127215,
        },
        tel: "+380 97 228 2282",
        workTime: "Weekday : 8am - 6pm, Weekend : 10am - 6pm",
      },
    },
  };

  componentDidMount() {
    //here will get info point from back and config mini map in shop data section
    let styledMapType = new google.maps.StyledMapType(MapStyle, { name: "Styled Map" });
    const map = new google.maps.Map(this.miniMap, {
      zoom: 17,
      center: { lat: this.state.pointData.shopData.mapInfo.lat, lng: this.state.pointData.shopData.mapInfo.lng },
      mapTypeControl: false,
    });
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");
    new google.maps.Marker({
      map: map,
      position: { lat: this.state.pointData.shopData.mapInfo.lat, lng: this.state.pointData.shopData.mapInfo.lng },
      animation: google.maps.Animation.DROP,
      title: this.state.pointData.pointName,
      icon: MarkerIcon,
    });
    this.setState({ map: map });
  }

  render() {
    //const { match } = this.props; // match.params.locationId
    const {
      mainPointImageURL,
      pointName,
      pointDescription,
      neighborhoodPoints,
      shopData: { address, tel, workTime },
    } = this.state.pointData;
    return (
      <div className="page">
        <div id="mainImagePoint" style={{ backgroundImage: "url(" + mainPointImageURL + ")" }} />
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
                <div key={elem.name} className="pointInfoWrapper" onClick={() => history.push(`/locations/${elem.id}`)}>
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

export default PointInfo;
