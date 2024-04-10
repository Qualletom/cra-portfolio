import React from "react";
import styled from "styled-components";

type WorkCardPropsType = {
  place: string;
  workType: string;
  period: {
    startDate: string;
    endDate: string;
  };
  result: string;
  description: string;
};
const WorkCard = ({
  place,
  workType,
  period,
  result,
  description,
}: WorkCardPropsType) => {
  return (
    <StyledWorkCard>
      <PlaceSide>
        <Title>{place}</Title>
        <WorkTypeContainer>
          <span>{workType}</span>
          <Period>
            {period.startDate} - {period.endDate}
          </Period>
        </WorkTypeContainer>
      </PlaceSide>
      <ResultSide>
        <Title>{result}</Title>
        <Description>{description}</Description>
      </ResultSide>
    </StyledWorkCard>
  );
};

export default WorkCard;

const StyledWorkCard = styled.article<{ position?: string }>`
  display: flex;
  gap: 40px;
  max-width: 970px;
  width: 100%;
  position: ${(props) => props.position || undefined};
`;

const PlaceSide = styled.div``;

const ResultSide = styled.div``;

const Title = styled.h3``;

const WorkTypeContainer = styled.div``;

const Period = styled.div``;

const Description = styled.p``;
