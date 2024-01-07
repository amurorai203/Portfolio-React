import React, { useState } from 'react';
import ProjectCard from "../ProjectCard";
import Wrapper from '../Wrapper';
import projectData from '../../projects.json';

function Projects() {
  const [project, setProject] = useState(projectData);


  // Map over friends and render a FriendCard component for each friend object
  return (
    <Wrapper>
      {/* <Title>Projects List</Title> */}
      {project.map((project) => (
        <ProjectCard
          id={project.id}
          title={project.title}
          screenshot={project.screenshot}
          desc={project.desc}
          github={project.github}
          url={project.url}
        />
      ))}
    </Wrapper>
  );
}

export default Projects;
