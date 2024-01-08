import React, { useState } from 'react';
import WorkProjectCard from "../WorkProjectCard";
import Wrapper from '../Wrapper';
import WorkProjectData from '../../workprojects.json';

function WorkProjects() {
  const [workproject, setWorkProject] = useState(WorkProjectData);


  // Map over friends and render a FriendCard component for each friend object
  return (
    <div>
    <h1 className="workproject">Projects on Work</h1>
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
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default WorkProjects;
