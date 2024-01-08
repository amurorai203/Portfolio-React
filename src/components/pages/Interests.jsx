import React, { useState } from 'react';
import InterestCard from "../InterestCard";
import Wrapper from '../Wrapper';
import interestData from '../../interests.json';

// Define the Interest objects to map thru json file
function Interests() {
  const [interest, setInterest] = useState(interestData);

  // Map over interests and render a InterestCard component for each interest object
  return (
    <div>
    <h1 className="interest">Interests</h1>
      <Wrapper>
        {/* <Title>Interests List</Title> */}
        {interest.map((interest) => (
          <InterestCard
            id={interest.id}
            key={interest.id}
            title={interest.title}
            screenshot={interest.screenshot}
            desc={interest.desc}
            github={interest.github}
            url={interest.url}
          />
        ))}
      </Wrapper>
    </div>
  );
}

export default Interests;
