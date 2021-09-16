import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./css/bootstrap/bootstrap.min.css"
import "./css/style.css"
import App from "./App"
import ParticlesBackground from "./components/ParticlesBackground"

const bringToTop = {
  position: "relative",
  zIndex: "10"
}

ReactDOM.render(
  <React.StrictMode>
    <App style={bringToTop} />
    <ParticlesBackground />
  </React.StrictMode>,
  document.getElementById("root")
)
