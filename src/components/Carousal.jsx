import React from "react";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';
import c1 from "../datas/imgcarousal/c11.png";
import c2 from "../datas/imgcarousal/c12.jpg";
import c3 from "../datas/imgcarousal/c13.png";

export default function Carousal() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="Second slide"
         
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
