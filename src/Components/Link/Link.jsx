import React from 'react';
import { URL } from '../URL/URL';
import { useState } from 'react';
import "../Sass/Link/Link.css";

export const Link = () => {
  const [errorDisplay, setErrorDisplay] = useState("none");
  const [URLDisplay, setURLDisplay] = useState("none");
  const [error, setError] = useState(null);
  const [value, setValue] = useState("https://www.twitter.com");
  const [url, setURL] = useState("");
  const [gradient, setGradient] = useState("linear-gradient(#fff 50%, aliceblue 50%)");

  const submit = (e) => {
    e.preventDefault();

    const input = document.querySelector("input");
    const thisValue = input.value;

    setValue(thisValue);

      if (thisValue.includes("https://www.")) {
        if (thisValue.includes(".com") || thisValue.includes(".net") || thisValue.includes(".gov") || thisValue.includes(".io")) {
          input.style.border = `none`;
          setErrorDisplay("none");

          let link = `https://api.shrtco.de/v2/shorten?url=${thisValue}`;

          fetch(link)
          .then(response => response.json())
          .then(data => {setURL(`${data.result.short_link}`)});

          setTimeout(() => {setURLDisplay("flex"); setGradient("linear-gradient(#fff 25%, aliceblue 25%)");}, 500);
        } else {
          input.style.border = `solid var(--red)`;
          setErrorDisplay("block");
          setError("Invalid URL (Check the URL's ending (.com, .net, etc.))");
        }
      } else {
        input.style.border = `solid var(--red)`;
        setErrorDisplay("block");
        setError("Invalid URL (Make sure you enter the protocol (https://www.))");
      }
  }
  
  return (
    <section id="link" style={{backgroundImage: `${gradient}`}}>
        <div id="link-container" className="similar-containers">
          <div id="link-shortner">
            <input type="text" placeholder="Shorten a link here..." />
            <a id="shorten" href="#" className="event-links" onClick={submit}>Shorten It!</a>
            <p style={{display: `${errorDisplay}`}}>{error}</p>
          </div>
          <URL url={url} value={value} show={URLDisplay} />
        </div>
    </section>
  )
}