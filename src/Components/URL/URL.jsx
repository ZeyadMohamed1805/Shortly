import React from 'react';
import { useState, useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import "./URLDesktop.css";
import "./URLMobile.css";

export const URL = (props) => { 
  const [copy, setCopy] = useState("Copy");

  const handleCopy = () => {
    setCopy("Copied");
  }

  useEffect(() => {
    setCopy("Copy");
  }, [props.url]);

  return (
    <section id="url" style={{display: `${props.show}`}}>
        <p>{props.value}</p>
        <div id="copy">
            <a id="new-link" href="#">{props.url}</a>
            <CopyToClipboard text={props.url}>
              <a id="copy-link" href="#" className="event-links" onClick={handleCopy}>{copy}</a>
            </CopyToClipboard>
        </div>
    </section>
  )
}
