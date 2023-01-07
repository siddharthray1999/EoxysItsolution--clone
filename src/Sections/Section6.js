import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Resizable extends Component {
  state = {
    display: true,
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none",
          }}
        >
          <div style={{ width: "100%", padding: "10px" }}>
            <div style={{ width: "1320px", padding: "10px" }}>
              <Slider {...settings}>
                <div>
                  <img
                    src="https://eoxysit.com/wp-content/uploads/2022/11/Dinelah-web-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://eoxysit.com/wp-content/uploads/2022/11/nycx-web.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://eoxysit.com/wp-content/uploads/2022/11/sabre-app-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://eoxysit.com/wp-content/uploads/2022/11/smileszy-web.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://eoxysit.com/wp-content/uploads/2022/11/sekeys-game-web.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://eoxysit.com/wp-content/uploads/2022/11/smileszy-web.png"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
