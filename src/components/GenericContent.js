import React from 'react'
import { Container } from 'react-bootstrap'
import hero_background from "../assets/hero_background.jpg"

const style ={

}

const style1 = {
  zIndex: 2,
  opacity: "0.4",
  width: "90%",
  height: "70%",
  backgroundImage: hero_background,
}

export default function genericContent() {
  return (
    <Container>
      <img src={hero_background} style={style1}
      
      />
    </Container>
  )
}
