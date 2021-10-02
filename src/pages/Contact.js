import React from "react"
import { Container, Card, Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"

const style = {
  card: {
    borderRadius: "10px",
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    maxWidth: "56em",
    margin: "auto"
  },
  container: {
    position: "relative",
    zIndex: 2,
    marginTop: "5vh"
  },
  font: {
    fontFamily: "Rajdhani"
  },
  labelText: {
    color: "#ffffff",
    fontFamily: "Rajdhani",
    fontSize: "1.5em"
  },
  titleText: {
    fontFamily: "Rajdhani",
    fontWeight: 900,
    color: "#ffffff"
  }
}

export default function Contact() {
  return (
    <Container style={style.container}>
      <Card style={style.card}>
        <Card.Body>
          <Container>
            <Form style={style.font}>
              <Form.Group className="mb-3">
                <Form.Label style={style.labelText}>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={style.labelText}>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group>
                <Form.Label style={style.labelText}>Region</Form.Label>
                <Form.Control as="select" size="md">
                  <option>Open this select menu</option>
                  <option value="1">North America</option>
                  <option value="2">Europe</option>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={style.labelText}>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group>
                <Button size="lg" variant="success" type="submit" style={{ width: "100%" }}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  )
}
