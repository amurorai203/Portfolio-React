import React, { useState } from 'react';
import InterestCard from "../InterestCard";
import Wrapper from '../Wrapper';
import interestData from '../../interests.json';

function Interests() {
  const [interest, setInterest] = useState(interestData);


  // Map over friends and render a FriendCard component for each friend object
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
