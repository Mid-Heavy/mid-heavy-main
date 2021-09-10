import React from 'react'
import MHLogo from '../assets/logo.svg'


export default function About() {
  return (
    <div className="aboutPage">
      <div className="about" id="about">
        <div className="aboutBox">
          <div style="max-width: 65em; text-align: center" className="mx-auto">
            <p className="h1 text-success">ABOUT US</p>

            <p>
              Mid Heavy is a team of tech enthusiasts, passionate about making
              cool projects, and learning along the way!
            </p>
            <button
              style="border-radius: 10px"
              type="button"
              class="btn btn-dark mt-4 pl-3 pr-3"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
