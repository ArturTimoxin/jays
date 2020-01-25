import React from "react";
import { Carousel } from "react-bootstrap";
import logoTitle from "../../assets/img/logo-and-title-white-300.png";

export default function MainPage() {
  return (
    <div className="wrapperMainPage">
      <img src={logoTitle} alt="" id="logoAndTitle" />
      <Carousel controls={false} indicators={false} interval={3000} pauseOnHover={false}>
        <Carousel.Item>
          <div style={{ backgroundImage: "url(http://localhost:3001/main-page/1_1920.jpg)" }} />
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundImage: "url(http://localhost:3001/main-page/2_1920.jpg)" }} />
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundImage: "url(http://localhost:3001/main-page/3_1920.jpg)" }} />
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ backgroundImage: "url(http://localhost:3001/main-page/4_1920.jpg)" }} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
