import React from "react"

export default function About() {
  return (
    <div className="aboutPage">
      <section className="aboutSection" id="about">
        <div className="aboutBox">
          <div style={{ maxWidth: "80%", textAlign: "center" }} className="mx-auto">
            <p className="h1 text-success">ABOUT US</p>

            <p>Mid Heavy is a team of tech enthusiasts, passionate about making cool projects, and learning along the way!</p>
            <button style={{ borderRadius: "10px" }} type="button" className="btn btn-dark mt-4 pl-3 pr-3">
              Learn More
            </button>
          </div>
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
