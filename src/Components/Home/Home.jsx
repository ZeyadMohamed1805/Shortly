import React from 'react';
import "../Sass/Home/Home.css";

export const Home = () => {
  return (
    <section id="home">
        <div id="home-container" className="similar-containers">
            <div id="home-left">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <a href="#" className="event-links">Get Started</a>
            </div>
            <div id="home-right">
                <img src={require('./illustration-working.svg').default} />
            </div>
        </div>
    </section>
  )
}
