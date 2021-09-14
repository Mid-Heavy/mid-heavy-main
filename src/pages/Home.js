import React from "react";
import AnimLogo from "../components/AnimLogo";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container style={{ height: "100%", marginTop: "25%" }}>
      <Container>
        <AnimLogo className="m-auto"></AnimLogo>
        <p>MidHeavy.tech</p>
      </Container>
    </Container>
  );
}
