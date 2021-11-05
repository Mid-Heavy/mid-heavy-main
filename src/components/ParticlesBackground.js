import React from 'react'
import Particles from 'react-tsparticles'
import particlesOptions from './particles.json'

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0
}

export default function ParticlesBackground() {
  return (
    <>
      <Particles style={style} options={particlesOptions} />
    </>
  )
}
