import React from 'react'
import AnimLogo from '../components/AnimLogo'
import { Container } from 'react-bootstrap'

const style = {
  position: 'relative',
  zIndex: 2,
  textAlign: 'center'
}

export default function Home() {
  return (
    <Container style={style}>
      <AnimLogo style={style} />
      <p className="homeLogoText">MidHeavy.tech</p>
    </Container>
  )
}
