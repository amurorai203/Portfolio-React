import React from "react";
import "./style.css";

function ProjectCard(props) {
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
          Github: <a href={props.github} target="_blank">{props.github}</a> 
          </li>
          <li>
          URL: <a href={props.url} target="_blank">{props.url}</a> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
