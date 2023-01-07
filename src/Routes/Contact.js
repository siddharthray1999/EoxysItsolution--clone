import React from "react";
import Footer from "../Components/Layout/Footer";
import Navbar from "../Components/Layout/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiPhoneCall, BiLocationPlus } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-us">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "7%",
            fontWeight: "700",
          }}
        >
          CONTACT US
        </h1>
      </div>
      <div className="contactus-form">
        <div>
          <img
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "29px",
              position: "relative",
            }}
            src="https://eoxysit.com/wp-content/uploads/2021/05/about-banner.png"
            alt=""
          />
          <h3
            style={{
              position: "absolute",
              marginTop: "-33%",
              marginLeft: "3%",
              fontWeight: "800",
              color: "white",
            }}
          >
            Contact information
          </h3>
          <p
            style={{
              position: "absolute",
              marginTop: "-30%",
              marginLeft: "3%",

              color: "#E0D6FF",
            }}
          >
            Fill up the form and our Team will get back to you <br />
            within 24 hours.
          </p>
          <BiPhoneCall
            style={{
              fontSize: "25px",
              position: "absolute",
              marginLeft: "-34%",
              marginTop: "14%",
              color: "white",
            }}
          />
          <p
            style={{
              position: "absolute",
              marginTop: "-23%",
              marginLeft: "7%",
              color: "white",
            }}
          >
            +91 85445783587
          </p>
          <BiLocationPlus
            style={{
              fontSize: "25px",
              position: "absolute",
              marginLeft: "-34%",
              marginTop: "18%",
              color: "white",
            }}
          />
          <p
            style={{
              position: "absolute",
              marginTop: "-19%",
              marginLeft: "7%",
              color: "white",
            }}
          >
            C-56 First floor, Extension, Nemi Nagar, Vaishali <br />
            Nagar, Jaipur, Rajasthan 302021
          </p>
          <div
            style={{
              width: "500px",
              position: "absolute",
              marginTop: "-39%",
              marginLeft: "45%",
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="Name" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Last Name</Form.Label>
                <Form.Control type="Name" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <p>
                <label for="w3review">Write us</label>
              </p>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="65"
              ></textarea>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#3E2291", border: "none" }}
              >
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
