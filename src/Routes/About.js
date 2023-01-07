import React from "react";
import Navbar from "../Components/Layout/Navbar";

import Card from "react-bootstrap/Card";

import Footer from "../Components/Layout/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutus-bg">
        <h1
          style={{
            fontWeight: "700",
            color: "white",
            marginLeft: "43%",
            paddingTop: "7%",
            position: "absolute",
          }}
        >
          ABOUT US
        </h1>
      </div>
      <div className="about-banner">
        <div>
          <h1
            style={{
              fontSize: "29px",
              fontWeight: "700",
              marginTop: "9%",
              marginLeft: "2%",
            }}
          >
            WE ARE A CLOSE, UNIQUE TEAM.
          </h1>
          <p style={{ fontSize: "14px", marginLeft: "2%" }}>
            Ranging From Emerging Entrepreneurs To The Corporate Giants, We
            Provide Web And Mobile App Development Services For Everyone <br />
            Who Wants To Thrive In The Long Run. For The New Brands, We Come Up
            With Ideas And Innovations That Can Level Up Their Digital <br />
            Marketing Game And Help Them To Rule The Virtual Throne. Whereas For
            The Seasoned Experts, We Function To Help Them In Staying Ahead Of
            The Cut-Throat Competition. In The World Full Of Constraints And
            Boundaries, We Are Like A<br />
            One-Size-Fits-All.
          </p>
          <p style={{ fontSize: "14px", marginLeft: "2%" }}>
            Be It About Website And App Development Or Just Rendering
            Consultation For Your Digital Marketing Queries, We Can Always Help
            You To Stay Ahead Of The Growth Curve. Implementing The Latest
            Technology In Trend And With Constant Efforts, We Transform Your
            Website Or App Into A True Masterpiece. Get In Touch With Us And See
            How We Pinch You From The Bottom Of SERPs To The Top Of Search
            Engines. Be A Part Of The Transformation And Find Out How You Can
            Benefit From Our Services!
          </p>
        </div>
        <div>
          <img
            style={{ marginTop: "21%", marginLeft: "-4%" }}
            src="https://eoxysit.com/wp-content/uploads/2021/06/about-us-image.png"
            alt=""
          />
        </div>
      </div>
      <div className="about-shiv">
        <div>
          <img
            style={{ width: "450px", marginTop: "24px", marginLeft: "12%" }}
            src="https://eoxysit.com/wp-content/uploads/2022/09/left-1-1.png.webp"
            alt=""
          />
        </div>
        <div>
          <h5 style={{ marginTop: "166px", marginLeft: "20%" }}>
            {" "}
            Your Dream. Our Mission
          </h5>
          <h1 style={{ marginLeft: "20%", fontWeight: "700" }}>
            WHY WE’RE AWESOME
          </h1>
          <p style={{ marginLeft: "20%" }}>
            Working With EoxysIT, You Can Feel Confident That Your Project Will
            Be Completed Quickly And Correctly. Our Past And Current Clients
            Have Provided Us With Numerous Testimonials To Support Our Claims.
            Testimonials To Support Our Claims.If You Are Interested In Working
            With Us, Or Would Like To Receive A Quote For Your Project Click
            Here To Visit Our Contact Page.
          </p>
          <button className="shiv-btn" style={{ marginLeft: "20%" }}>
            our service
          </button>
        </div>
      </div>
      <div style={{ paddingTop: "200px" }} className="our-team">
        <div>
          <h5 style={{ marginLeft: "3%", fontWeight: "700" }}>Our Team</h5>
          <h2 style={{ marginLeft: "3%", fontWeight: "700" }}>
            Our Professionals
          </h2>
          <p style={{ marginLeft: "3%" }}>
            We Give Top Priority To Customer Satisfaction. You Can Be 100% Sure
            Of The Quality Of The Service Rendered.
          </p>
        </div>
        <div>
          <button className="our-btn">join our team</button>
        </div>
      </div>
      <div className="team-photo">
        <Card style={{ width: "16rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/09/hr-3.png.webp"
          />
          <Card.Body>
            <Card.Title>Monika Kumari</Card.Title>
            <Card.Text>Human Resources (HR)</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/09/sudesh-sir-2.png.webp"
          />
          <Card.Body>
            <Card.Title>Sudesh Todwal</Card.Title>
            <Card.Text>Project Manager</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/09/kuldeep-sir-2.png.webp"
          />
          <Card.Body>
            <Card.Title>Kuldeep Parmar</Card.Title>
            <Card.Text>Project Manager</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "16rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/09/01-3-3.png.webp"
          />
          <Card.Body>
            <Card.Title>Gurmeet Singh</Card.Title>
            <Card.Text>Project Manager</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ paddingTop: "150px" }} className="lastimg-about">
        <div>
          <img
            style={{ marginLeft: "5%" }}
            src="https://eoxysit.com/wp-content/uploads/2021/05/left-1.png"
            alt=""
          />
        </div>
        <div>
          <h5 style={{ marginTop: "14%", fontSize: "15px" }}>WHY CHOOSE US</h5>
          <h3 style={{ fontWeight: "700" }}>
            Save TIme & Effort With The <br />
            Eoxys IT
          </h3>
          <h5>First Working Process</h5>
          <p>
            For startups and growing businesses, an online specialist can
            develop a digital <br />
            marketing plan to help you grow.
          </p>
          <h5>Dedicated Team Member</h5>
          <p>
            We believe that we are a part of your team and you can depend on us
            for <br />
            additional support. We are always happy to assist our clients with
            quick and
            <br /> prompt solutions.
          </p>
          <h5>24/7 Hours Support</h5>
          <p>
            Our 24/7 service is another way of saying, you can count on us. Once
            you notify <br />
            us with your concerns, we will respond to you right away.
          </p>
        </div>
      </div>
      <div style={{ paddingTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
