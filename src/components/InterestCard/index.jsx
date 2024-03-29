import React from "react";
import "./style.css";

// Define the InterestCard layout
function InterestCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.screenshot} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.desc}
          </li>
          <li>
          <a href={props.url} target="_blank">{props.url}</a> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InterestCard;
