import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Section10 = () => {
  return (
    <div>
      <div className="section10-span">
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#A2A2A2",
          }}
        >
          Latest updates and News
        </h5>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#0C40D6",
          }}
        >
          From The&nbsp;
          <span>Blog</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          margin: "50px",
          justifyContent: "space-between",
        }}
      >
        <Card style={{ width: "24rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2021/06/Blog-V-05-1024x640-1.png"
          />
          <Card.Body>
            <Card.Text>
              WooCommerce : How to remove WooCommerce breadcrumbs.
            </Card.Text>
            <Button
              style={{
                backgroundColor: "white",
                color: "#056EDA",
                border: "none",
              }}
            >
              Read more
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "24rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2021/06/Blog-2-1024x640-1-1.png"
          />
          <Card.Body>
            <Card.Text>
              WooCommerce : How to change the number of products on shop page in
              woocommerce.
            </Card.Text>
            <Button
              style={{
                backgroundColor: "white",
                color: "#056EDA",
                border: "none",
              }}
            >
              Read more
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "24rem", border: "none" }}>
          <Card.Img
            variant="top"
            src="https://eoxysit.com/wp-content/uploads/2021/06/Blog-V-04-1024x640-1.png"
          />
          <Card.Body>
            <Card.Text>
              WooCommerce : Change the WooCommerce Breadcrumb Text.
            </Card.Text>
            <Button
              style={{
                backgroundColor: "white",
                color: "#056EDA",
                border: "none",
              }}
            >
              Read more
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Section10;
