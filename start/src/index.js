import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ul>
         <li> <Link to="/">Home</Link></li>
        <li> <Link to="/about/123">About</Link></li>
        <li> <Link to="/contact">Contact</Link></li>  
        <li> <Link to="/abc">NotFound</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/:userId" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route component={NotFound}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


