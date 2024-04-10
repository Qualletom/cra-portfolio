import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Icon from "../../../../../components/Icon/Icon";

type ContactInfoCardPropsType = {
  iconName: string;
  rows: Array<{
    title: string;
    description: string;
  }>;
};
const ContactInfoCard = ({ iconName, rows }: ContactInfoCardPropsType) => {
  return (
    <StyledContactInfoCard>
      <Icon name={iconName} />
      {rows.map((row) => {
        return (
          <RowContainer key={uuidv4()}>
            <RowTitle>{row.title}</RowTitle>
            <RowDescription>{row.description}</RowDescription>
          </RowContainer>
        );
      })}
    </StyledContactInfoCard>
  );
};

export default ContactInfoCard;

const StyledContactInfoCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const RowTitle = styled.h4``;

const RowDescription = styled.span``;
