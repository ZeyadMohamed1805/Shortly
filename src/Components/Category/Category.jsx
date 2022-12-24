import React from 'react';
import "./CategoryDesktop.css";
import "./CategoryMobile.css";

export const Category = (props) => {
  return (
    <div className="footer-categories">
        <h4>{props.header}</h4>
        <div className="footer-links">
            {props.links.map((link) => (<a key={link.key} href="#">{link.url}</a>))}
        </div>
    </div>
  )
}