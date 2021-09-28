import React from "react";
import { Container, Card, Button, Row } from "react-bootstrap";

const cardStyle = {
  backgroundColor: "rgba(38,38,38,0.7)",
  marginTop: "2em",
  color: "#d6d6d6",
};

const bodyStyle = {
  fontFamily: "Rajdhani",
  fontSize: "18px",
};

const titleStyle = {
  fontFamily: "Rajdhani",
  fontWeight: "900",
  fontSize: "28px",
  maxWidth: "80%",
  margin: "auto",
  position: "relative",
  textAlign: "center",
};

const buttonStyle = {
  fontFamily: "Rajdhani",
  display: "block",
  maxWidth: "50%",
  margin: "auto",
};

export default function PageNotFound() {
  return (
    <Container
      fluid
      style={{ position: "relative", zIndex: 10, maxWidth: "80%" }}
    >
      <Card style={cardStyle}>
        <Card.Body style={bodyStyle}>
          <Card.Title style={titleStyle}>404: Page Not Found</Card.Title>
          <Card.Text style={{ marginBottom: "1em" }}>
            <Row style={{ marginTop: "1em" }}>
              <i
                style={{ fontSize: "70px", margin: "auto" }}
                class="fas fa-exclamation-circle"
              ></i>
            </Row>
            <br />
            <Row style={{ maxWidth: "80%", margin: "auto" }}>
              The page you tried to go to isn't a thing. Try looking for
              something that exists!
            </Row>
          </Card.Text>

          <Button style={buttonStyle} href="/" variant="warning" size="sm">
            Home Page
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
