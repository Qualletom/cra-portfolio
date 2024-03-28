import React from "react";
import styled from "styled-components";

type SectionHeaderPropsType = {
  title: string;
  children: string;
};
const SectionHeader = ({ title, children }: SectionHeaderPropsType) => {
  return (
    <StyledSectionHeader>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </StyledSectionHeader>
  );
};

export default SectionHeader;

const StyledSectionHeader = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 25px;
`;

const Description = styled.p`
  font-size: 15px;
  text-align: center;
  color: #767676;
`;
