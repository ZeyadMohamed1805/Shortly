import React from 'react';
import { Category } from '../Category/Category';
import "../Sass/Footer/Footer.css";

export const Footer = () => {
  return (
    <footer>
        <div id="footer-container" className="similar-containers">
            <h1>Shortly</h1>
            <div id="footer-right">
                <Category header={"Features"} links={[{key: 1, url: "Link Shortening"}, {key: 2, url: "Branded Links"}, {key: 3, url: "Analytics"}]}/>
                <Category header={"Resources"} links={[{key: 1, url: "Blog"}, {key: 2, url: "Developers"}, {key: 3, url: "Support"}]}/>
                <Category header={"Company"} links={[{key: 1, url: "About"}, {key: 2, url: "Our Team"}, {key: 3, url: "Careers"}, {key: 4, url: "Contact"}]}/>
                <div id="footer-media" className="similar-containers">
                    <img className="svg" src={require("./icon-facebook.svg").default} />
                    <img className="svg" src={require("./icon-twitter.svg").default} />
                    <img className="svg" src={require("./icon-pinterest.svg").default} />
                    <img className="svg" src={require("./icon-instagram.svg").default} />
                </div>
            </div>
        </div>
    </footer>
  )
}
