import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <img
            src="https://eoxysit.com/wp-content/uploads/2021/06/logo.png.webp"
            alt=""
            style={{ width: "35px" }}
          />
          <Navbar.Brand
            href="#"
            className="navbar-form navbar-fixed-top"
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "27px",
            }}
          >
            EoXys<span>IT</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft: "20%" }}
              navbarScroll
            >
              <Link to="/">
                <Nav.Link href="/" style={{ textDecoration: "none" }}>
                  Home
                </Nav.Link>
              </Link>

              {/* <Nav.Link href="#action2">Link</Nav.Link> */}

              <NavDropdown title="About us" id="navbarScrollingDropdown">
                <Link to="/about">
                  <NavDropdown.Item href="#action3">Our Team</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link to="/portfolio">
                <Nav.Link href="#action1">Portfolio</Nav.Link>
              </Link>
              <Link to="/ourservice">
                <NavDropdown title="Our service" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">XHTML</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">cms</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Custom development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    e-commerce
                  </NavDropdown.Item>
                </NavDropdown>
              </Link>

              <Link to="/contact">
                <Nav.Link href="#" disabled>
                  Contact
                </Nav.Link>
              </Link>
              <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/requestquote">
              <Button
                variant="outline-success"
                style={{
                  background:
                    "-webkit-linear-gradient( 0deg ,#26f4ff 0%,#0d44d7 100%)",
                  color: "white",
                  border: "none",
                  marginLeft: "-6%",
                  width: "172px",
                }}
              >
                REQUEST A QUOTE
              </Button>
            </Link>
            <img
              src="https://freesvg.org/img/phone-call-icon.png"
              alt=""
              style={{ width: "38px" }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
