import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import WorkCard from "../../../components/WorkCard/WorkCard";
import workHistoryData from "./workHistoryData";

const WorkHistory = () => {
  return (
    <StyledWorkHistory>
      <SectionHeader title="Work History">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionHeader>
      <WorkHistoryCardsContainer>
        {workHistoryData.map((item) => {
          return <WorkCard key={uuidv4()} {...item} />;
        })}
      </WorkHistoryCardsContainer>
    </StyledWorkHistory>
  );
};

export default WorkHistory;

const StyledWorkHistory = styled.section``;

const WorkHistoryCardsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;
