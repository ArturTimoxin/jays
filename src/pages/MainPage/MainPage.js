import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img/carousel/1920/1_1920.jpg";
import img2 from "../../assets/img/carousel/1920/2_1920.jpg";
import img3 from "../../assets/img/carousel/1920/3_1920.jpg";
import img4 from "../../assets/img/carousel/1920/4_1920.jpg";
import logoTitle from "../../assets/img/logo-and-title-white-300.png";
class MainPage extends Component {
  render() {
    return (
      <div className="wrapperMainPage">
        <img src={logoTitle} alt="" id="logoAndTitle" />
        <Carousel controls={false} indicators={false} interval={3000} pauseOnHover={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            {/* <div className="d-block w-100" style={{ background: `url(${img1}) ` }} /> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />
            {/* <div className="d-block w-100" style={{ background: `url(${img2}) ` }} /> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            {/* <div className="d-block w-100" style={{ background: `url(${img3}) ` }} /> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Third slide" />
            {/* <div className="d-block w-100" style={{ background: `url(${img4}) ` }} /> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default MainPage;
