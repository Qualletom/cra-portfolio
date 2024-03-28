import React from "react";
import styled from "styled-components";

export type PriceCardPropsType = {
  name: string;
  price: string;
  description: string;
  isMostPopular: boolean;
  options: Array<{ name: string; available: boolean }>;
};
const PriceCard = ({
  name,
  price,
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isMostPopular,
  options,
}: PriceCardPropsType) => {
  return (
    <StyledPriceCard>
      <PlanName>{name}</PlanName>
      <Price>
        ${price}
        <span>/Hour</span>
      </Price>
      <Description>{description}</Description>
      <OptionsList>
        {options.map((option) => {
          return <Option key={option.name}>{option.name}</Option>;
        })}
      </OptionsList>
    </StyledPriceCard>
  );
};

export default PriceCard;

const StyledPriceCard = styled.article`
  display: flex;
  flex-direction: column;
`;

const PlanName = styled.h3`
  font-weight: 600;
  font-size: 24px;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: 32px;
`;

const Description = styled.p``;

const OptionsList = styled.ul``;

const Option = styled.li``;
