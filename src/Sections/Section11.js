import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Section11 = () => {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div className="section11-backimg"></div>
      <div className="tell-us">
        <div>
          <h1 style={{ marginLeft: "5%", marginTop: "2%", fontWeight: "700" }}>
            Tell us about <br />
            your project
          </h1>
          <h5 style={{ marginLeft: "5%" }}>
            Let’s discuss your project and find out what we can
            <br /> do to provide value.
          </h5>
          <img
            style={{ marginLeft: "5%" }}
            src="https://eoxysit.com/wp-content/uploads/2021/02/Untitled-20.png"
            alt=""
          />
        </div>
        <div className="contact-form">
          <Form>
            <Form.Group
              controlId="formBasicEmail"
              style={{ width: "200%", backgroundColor: "#F9F9F9" }}
            >
              <Form.Label>Name</Form.Label>

              <Form.Control type="Name" placeholder="Name" />
              <Form.Label>Email</Form.Label>

              <Form.Control type="Email" placeholder="Enter Email" />
              <Form.Label>Country</Form.Label>

              <Form.Control type="Country" placeholder="Country" />
              <Form.Label>Skype </Form.Label>

              <Form.Control type="Skype" placeholder="Skype Id" />
            </Form.Group>

            <Form.Group style={{ width: "200%" }}>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Mobile Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              className="contact-btn"
              variant="primary"
              type="submit"
              style={{
                width: "200%",
              }}
            >
              send your enquiry
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Section11;
