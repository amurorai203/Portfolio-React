import React, { useState } from 'react';
import ProjectCard from "../ProjectCard";
import WorkProjectCard from "../WorkProjectCard";
import Wrapper from '../Wrapper';
import projectData from '../../projects.json';
import workProjectData from '../../workprojects.json';

function Projects() {
  const [project, setProject] = useState(projectData);
  const [workproject, setWorkProject] = useState(workProjectData);

  // Map over friends and render a FriendCard component for each friend object
  return (
    <div>
    <br></br>
    <h1 className="project">edX Projects</h1>
      <Wrapper>
        {/* <Title>Projects List</Title> */}
        {project.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            screenshot={project.screenshot}
            desc={project.desc}
            github={project.github}
            url={project.url}
          />
        ))}
      </Wrapper>
      <br></br>
      <h1 className="project">Work Projects</h1>
      <Wrapper>
        {/* <Title>Projects on Work List</Title> */}
        {workproject.map((workproject) => (
          <WorkProjectCard
            id={workproject.id}
            key={workproject.id}
            title={workproject.title}
            screenshot={workproject.screenshot}
            desc={workproject.desc}
            desc2={workproject.desc2}
            url={workproject.url}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default Projects;
