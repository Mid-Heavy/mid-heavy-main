import React from "react"
import GenericContent from "../components/GenericContent"
import { Container } from "react-bootstrap"

export default function About() {
  return (
    <div className="aboutPage">
      <section className="aboutSection" id="about">
        <div className="aboutBox">
          <Container>
            
            <GenericContent/>
          </Container>
        </div>
      </section>
      <section className="aboutSection" id="chris">
        <div className="aboutBox">
          <p className="h1 text-success">Chris</p>
        </div>
      </section>
      <section className="aboutSection" id="mac">
        <div className="aboutBox">
          <p className="h1 text-success">Mac</p>
        </div>
      </section>
      <section className="aboutSection" id="millie">
        <div className="aboutBox">
          <p className="h1 text-success">Millie</p>
        </div>
      </section>
      <section className="aboutSection" id="rori">
        <div className="aboutBox">
          <p className="h1 text-success">rori</p>
        </div>
      </section>
    </div>
  )
}
