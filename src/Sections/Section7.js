import React from "react";

import Card from "react-bootstrap/Card";

const Section7 = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: "80px",
          textAlign: "center",
          color: "black",
          fontWeight: "800",
        }}
      >
        <h2>Highlights of Our Success Story</h2>
        <h6 style={{ paddingTop: "20px", color: "#818181" }}>
          Here is a glimpse of what we have achieved so far with our collective
          efforts. Don’t take our word for it, take a look at our work and be
          the judge.
        </h6>
      </div>
      <div style={{ paddingBottom: "30px" }}>
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            marginLeft: "6%",
            paddingTop: "40px",
            border: "none",
            display: "inline-block",
          }}
        >
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/rocket-icon.svg"
            style={{ width: "100px", marginLeft: "1%" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                color: "#000C1E",
                fontWeight: "700",
                fontSize: "40px",
              }}
            >
              1200+
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Projects Delivered
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            border: "none",

            paddingTop: "40px",
            display: "inline-block",
          }}
        >
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/pro-icon.svg"
            style={{ width: "100px", marginLeft: "1%" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                color: "#000C1E",
                fontWeight: "700",
                fontSize: "40px",
              }}
            >
              55+
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>Professionals</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            border: "none",
            paddingTop: "40px",
            display: "inline-block",
          }}
        >
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/client-retention.svg"
            style={{ width: "100px", marginLeft: "1%" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                color: "#000C1E",
                fontWeight: "700",
                fontSize: "40px",
              }}
            >
              80+
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Client Retention
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            textAlign: "center",
            border: "none",

            paddingTop: "40px",
            display: "inline-block",
          }}
        >
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2022/11/exp-icon.svg"
            style={{ width: "100px", marginLeft: "1%" }}
          />
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center",
                color: "#000C1E",
                fontWeight: "700",
                fontSize: "40px",
              }}
            >
              16+
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              Years of Experience
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Section7;
