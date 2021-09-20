import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "./css/bootstrap/bootstrap.min.css"
import "./css/style.css"
import App from "./App"
import ParticlesBackground from "./components/ParticlesBackground"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParticlesBackground />
  </React.StrictMode>,
  document.getElementById("root")
)
