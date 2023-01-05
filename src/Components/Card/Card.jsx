import React from 'react';
import "../Sass/Card/Card.css";

export const Card = (props) => {
  return (
    <div id={props.ID} className="card">
        <div className="card-image">
            <img src={props.images} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
    </div>
  )
}
