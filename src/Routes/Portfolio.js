import React from "react";
import Card from "react-bootstrap/Card";
import Section11 from "../Sections/Section11";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";
const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="portfolio-ing">
        <div>
          <h1 style={{ marginTop: "33%", marginLeft: "9%", fontWeight: "700" }}>
            Case Studies of Our <br />
            Passion & Dedication
          </h1>
          <p style={{ marginLeft: "9%" }}>
            These Case Studies are the stories of some of our favorite projects
            that motivated <br />
            us to go extra miles to achieve the Arka-level of quality. You will
            also witness the
            <br /> subtlety of our dedication & passion that we put in our works
            to take them closer to perfection.
          </p>
        </div>

        <img
          style={{
            width: "46%",
            marginLeft: "-6%",
            marginTop: "5%",
            marginRight: "6%",
          }}
          src="https://eoxysit.com/wp-content/uploads/2022/11/case_study.svg"
          alt=""
        />
      </div>
      <div style={{ paddingTop: "100px" }} className="portfolio-cards">
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/dinelah-web.png.webp"
          />
        </Card>
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/sekeys-game-web.png"
          />
        </Card>
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/smileszy-web.png"
          />
        </Card>
      </div>
      <div style={{ paddingTop: "30px" }} className="portfolio-cards">
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/getdurga-web.png.webp"
          />
        </Card>
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/nycx-web.png"
          />
        </Card>
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/sekeys-web.png"
          />
        </Card>
      </div>
      <div style={{ paddingTop: "30px" }} className="portfolio-cards">
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/dinelah-app-2.png"
          />
        </Card>
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/zarathom-web.png"
          />
        </Card>
        <Card style={{ width: "26rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/smileszy-web.png"
          />
        </Card>
      </div>
      <Section11 />

      <Footer />
    </div>
  );
};

export default Portfolio;
