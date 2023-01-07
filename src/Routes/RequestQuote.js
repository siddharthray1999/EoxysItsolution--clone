import React from "react";
import Navbar from "../Components/Layout/Navbar";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Footer from "../Components/Layout/Footer";

const RequestQuote = () => {
  return (
    <div>
      <Navbar classname="fixed-top" />
      <div>
        <h1 style={{ textAlign: "center", marginTop: "4%", fontWeight: "700" }}>
          Get a perfect quote
        </h1>
        <h5 style={{ textAlign: "center", marginTop: "5%", color: "#7A7A7A" }}>
          We’re eager to work with you. Please share your project goals and
          contact information. We respond to 97% of queries
        </h5>
        <h5 style={{ textAlign: "center", color: "#7A7A7A" }}>
          within 1-2 business days. Really!
        </h5>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "70px",
        }}
      >
        <div style={{ width: "45%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="First Name" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="Phone Number" placeholder="Phone Number" />
            </Form.Group>
          </Form>
        </div>

        <div style={{ width: "45%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="Last Name" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Skype ID/Whatsapp No</Form.Label>
              <Form.Control type="text" placeholder="Skype ID/Whatsapp No" />
            </Form.Group>
          </Form>
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default RequestQuote;
