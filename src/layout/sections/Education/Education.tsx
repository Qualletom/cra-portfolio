import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import educationData from "./educationData";
import WorkCard from "../../../components/WorkCard/WorkCard";

const Education = () => {
  return (
    <StyledEducation>
      <SectionHeader title="Education">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionHeader>
      <EducationCardsContainer>
        {educationData.map((item) => {
          return <WorkCard key={uuidv4()} {...item} />;
        })}
      </EducationCardsContainer>
    </StyledEducation>
  );
};

export default Education;

const StyledEducation = styled.section``;

const EducationCardsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;
