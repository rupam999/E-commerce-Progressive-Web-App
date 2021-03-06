import React from "react";
import { Row, Col } from "antd";
import "./css/DesktopHome3BannerStyle.css";

const DesktopHome3Banner = () => {
  return (
    <div className="Home3banner">
      <Row>
        <Col span={8}>
          <div className="Home3bannerImage marginRight">
            <img
              alt="Wash5thFeb"
              srcSet="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, 
                                https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x"
              src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="Home3bannerImage marginRight">
            <img
              alt="Furniture Bestsellers"
              srcSet="https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg?q=50 2x, 
                                https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50 1x"
              src="https://rukminim1.flixcart.com/flap/480/480/image/084789479074d2b2.jpg?q=50"
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="Home3bannerImage">
            <img
              alt="Wash5thFeb"
              srcSet="https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50 2x, 
                                https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50 1x"
              src="https://rukminim1.flixcart.com/flap/480/480/image/1ce0c4c1fb501b45.jpg?q=50"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DesktopHome3Banner;
