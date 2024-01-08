import React from "react";
import "./style.css";

function WorkProjectCard(props) {
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
          {props.desc2}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WorkProjectCard;
