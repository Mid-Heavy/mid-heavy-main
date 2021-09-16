import "./App.css"
import MHNavbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"

const bringToTop = {
  position: "relative",
  zIndex: 10
}

function App() {
  return (
    <div className="App">
      <Router>
        <MHNavbar />

        <Switch>
          <Route exact path={["/home", "/", ""]}>
            <Home style={bringToTop}></Home>
          </Route>
          <Route exact path={"/about"}>
            <About style={bringToTop}></About>
          </Route>
          <Route exact path={"/contact"}>
            <Contact style={bringToTop} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
