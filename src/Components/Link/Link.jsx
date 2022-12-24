import React from 'react';
import "./LinkDesktop.css";
import "./LinkMobile.css";

export const Link = () => {
  const validity = (e) => {
    e.preventDefault();

    const input = document.querySelector("input");
    const value = input.value;

    if (value.includes("www.")) {
      if (value.includes(".com") || value.includes(".net") || value.includes(".gov")) {
        input.style.border = `none`;
      } else {
        input.style.border = `solid red`;
      }
    } else {
      input.style.border = `solid red`;
    }
  }
  
  return (
    <section id="link">
        <div id="link-container" className="similar-containers">
            <input type="text" placeholder="Shorten a link here..." />
            <a href="#" className="event-links" onClick={validity}>Shorten It!</a>
        </div>
    </section>
  )
}