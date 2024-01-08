import React, { useState } from 'react';
import EducationCard from "../EducationCard";
import Wrapper from '../Wrapper';
import educationData from '../../education.json';

function Home() {
  const [education, setEducation] = useState(educationData);

  return (
    <div className="profile" id="profile">
      <h1>Andy Lai</h1>
      <br></br>
      <img className="myself-photo" src="https://amurorai203.github.io/Bootstrap-Portfolio/images/Andy.jpg"></img>
      <br></br>
      <br></br>
      <h4>Professional IT developer</h4>
      <h5>Hands on project management, business analysis and development experience in Banking and Insurance industry. Before moving to United Kingdom, my latest role covered working on projects related to AML solution and IFRS17 implementation.</h5>
      <h5>To boarden with the latest programming skills and gaining the experience to working with local personnel, currently studying and improving my development skill in Web Frontend development through edX.</h5>
      <br></br>
      <h1 className="education" id="education">Education</h1>
      <Wrapper>
        {/* <Title>Projects List</Title> */}
        {education.map((education) => (
          <EducationCard
            id={education.id}
            key={education.id}
            title={education.title}
            screenshot={education.screenshot}
            desc={education.desc}
            url={education.url}
          />
        ))}
      </Wrapper>
      <br></br>

    </div>
  );
}

export default Home;
