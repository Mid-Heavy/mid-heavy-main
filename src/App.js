import "./App.css";
import MHNavbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <MHNavbar />

        <Switch>
          <Route exact path={["/home", "/", ""]}>
            <Home></Home>
          </Route>
          <Route exact path={"/about"}>
            <About></About>
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          <Route exact path={""}>
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
