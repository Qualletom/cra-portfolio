import React from "react";
import styled from "styled-components";
import Icon from "../../../../components/Icon/Icon";

type ServiceCardPropsType = {
  iconName: string;
  title: string;
  children: string;
};
const ServiceCard = ({ iconName, title, children }: ServiceCardPropsType) => {
  return (
    <StyledServiceCard>
      <Icon name={iconName} />
      <h3>{title}</h3>
      <span>{children}</span>
    </StyledServiceCard>
  );
};

export default ServiceCard;

const StyledServiceCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
