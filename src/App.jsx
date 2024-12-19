import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Nav from "./pages/Nav.jsx";
import Auth from "./pages/Auth.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import essentials from "./pages/essentials.jsx";
import Cart from "./pages/cart.jsx";

function App() {
  function RouteHandler() {
    const location = useLocation();

    useEffect(() => {
      document.addEventListener("DOMContentLoaded", navactivity());
      // const preloading = document.querySelector(".preloading");
      const body = document.querySelector("body");

      // preloading.classList.remove("inactive");
      body.style.overflow = "hidden";

      setTimeout(() => {
        // preloading.classList.add("inactive");
        body.style.overflow = "scroll";
      }, 1000);
    }, [location]);

    function navactivity() {
      const nav = document.querySelector("nav");
      if (
        window.location.pathname == "/auth" ||
        window.location.pathname == "/cart"
      )
        nav.classList.add("inactive");
      else nav.classList.remove("inactive");
    }

    essentials.checkUserActivity();

    return;
  }

  return (
    <Router>
      <Nav />
      <RouteHandler />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/auth" Component={Auth} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </Router>
  );
}

export default App;
