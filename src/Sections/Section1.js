import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Section1 = () => {
  return (
    <div className="section1-back">
      <div>
        <h1
          style={{
            fontSize: "94px",
            fontWeight: "800",
            color: "#26f4ff ",
            position: "absolute",
            marginTop: "7%",
            marginLeft: "43%",
          }}
          className="heading-gradiant"
        >
          <span> +16</span>
        </h1>
        <h1
          style={{
            color: "white",
            position: "absolute",
            fontSize: "50px",
            marginTop: "15%",
            marginLeft: "27%",
          }}
        >
          Years of IT industry success.
        </h1>
        <h5
          style={{
            color: "white",
            position: "absolute",
            marginTop: "20%",
            marginLeft: "39%",
          }}
        >
          Go Beyond Your Wildest Dreams
        </h5>
        <h5
          style={{
            color: "white",
            position: "absolute",
            marginTop: "22%",
            marginLeft: "33%",
          }}
        >
          Leader In Website Creation And App Development
        </h5>
        <h5
          style={{
            color: "white",
            position: "absolute",
            marginTop: "24%",
            marginLeft: "23%",
          }}
        >
          Over the last 16 years, we have created 40,000 websites for
          entrepreneurs like you
        </h5>
        <img
          src="https://eoxysit.com/wp-content/uploads/2022/10/content-1.png.webp"
          alt=""
          style={{ positon: "absolute", marginTop: "39%", marginLeft: "2%" }}
        />
      </div>
      <div>
        <Carousel
          style={{ position: "absolute", marginTop: "-4%", marginLeft: "22%" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-10"
              src="https://eoxysit.com/wp-content/uploads/2022/10/icon6.png.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-10"
              src="https://eoxysit.com/wp-content/uploads/2022/10/icon4.png.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-10"
              src="https://eoxysit.com/wp-content/uploads/2022/10/icon3.png.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-10"
              src="https://eoxysit.com/wp-content/uploads/2022/10/icon5.png.webp"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-10"
              src="https://eoxysit.com/wp-content/uploads/2022/10/icon5.png.webp"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Section1;
