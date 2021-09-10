import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path={["/home", "/"]}>
            <Home></Home>
          </Route>
          {/* <Route exact path={"/about"}>
            <About></About>
          </Route> */}
          <Route>{/* Contact */}</Route>
        </Switch>
      </Router>
      {/* <Footer></Footer> */}
    </>
  );
}
