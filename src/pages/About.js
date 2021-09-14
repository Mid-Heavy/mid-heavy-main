import React from "react";

const style1 = {
  maxWidth: "65em",
  textAlign: "center",
};

const style2 = {
  borderRadius: "10px",
};

export default function About() {
  return (
    <div className="aboutPage">
      <div className="about" id="about">
        <div className="aboutBox">
          <div style={style1} className="mx-auto">
            <p className="h1 text-success">ABOUT US</p>
            <p>
              Mid Heavy is a team of tech enthusiasts, passionate about making
              cool projects, and learning along the way!
            </p>
            <button
              style={style2}
              type="button"
              class="btn btn-dark mt-4 pl-3 pr-3"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
