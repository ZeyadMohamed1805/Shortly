import React from 'react';
import { useState } from 'react';
import "../Sass/Nav/Nav.css";

export const Nav = () => {
  const [style, setStyle] = useState("none");

  const handleClick = () => {
    if (style === "none") {
        setStyle("flex");
    } else {
        setStyle("none");
    }
  }
    
  return (
    <div id="nav">
        <nav id="main-nav">
            <div id="main-nav-container" className="similar-containers">
                <div id="main-nav-left">
                    <h1>Shortly</h1>
                    <div id="main-nav-left-links">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Resources</a>
                    </div>
                </div>
                <div id="main-nav-right">
                    <a href="#">Login</a>
                    <a href="#" className="event-links">Sign Up</a>
                </div>
                <i id="menu" className="fa-solid fa-bars" onClick={handleClick}></i>
                <script src="../SideNav/SideNavEvent.js"></script>
            </div>
        </nav>
        <nav id="side-nav" style={{display: `${style}`}}>
            <div id="side-nav-container" className="similar-containers">
                <div id="side-nav-top">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </div>
                <div id="side-nav-bottom">
                    <a href="#">Login</a>
                    <a href="#" className="event-links">Sign Up</a>
                </div>
            </div>
        </nav>
    </div>
  )
}
