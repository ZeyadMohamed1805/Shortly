import React from 'react';
import { Card } from '../Card/Card';
import "../Sass/Stats/Stats.css";

export const Stats = () => {
  return (
    <section id="stats">
        <div id="stats-container" className="similar-containers">
            <h1>Advanced Statistics</h1>
            <p id="stats-subheader">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div id="stats-cards">
                <div id="joiner"></div>
                <Card ID={"first-card"} images={require('./icon-brand-recognition.svg').default} title="Brand Recognition" paragraph={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."} />
                <Card ID={"middle-card"} images={require('./icon-detailed-records.svg').default} title="Detailed Records" paragraph={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} />
                <Card ID={"last-card"} images={require('./icon-fully-customizable.svg').default} title="Fully Customizable" paragraph={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} />
            </div>
        </div>
    </section>
  )
}
