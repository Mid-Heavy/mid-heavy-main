import React from "react"
import AnimLogo from "../components/AnimLogo"
import { Container } from "react-bootstrap"

const style = {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  height: "100%",
  width: "100%",
  marginTop: "25%"
}

export default function Home() {
  return (
    <Container>
      <Container style={style}>
        <AnimLogo></AnimLogo>
        <p>MidHeavy.tech</p>
      </Container>
    </Container>
  )
}
