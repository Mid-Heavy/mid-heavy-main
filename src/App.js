import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path={["/home", "/"]}>
                        <Home></Home>
                    </Route>
                    <Route exact path={"/about"}>
                        <About></About>
                    </Route>
                    <Route exact path={"/contact"}></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
