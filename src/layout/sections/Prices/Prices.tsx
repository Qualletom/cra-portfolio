import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import PriceCard, { PriceCardPropsType } from "./PriceCard/PriceCard";
import pricesData from "./pricesData";

const Prices = () => {
  return (
    <StyledPrices>
      <SectionHeader title="Price plans">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionHeader>
      <ServicesCardsContainer>
        {pricesData.map((props: PriceCardPropsType) => {
          return (
            <li key={props.name}>
              <PriceCard {...props} />
            </li>
          );
        })}
      </ServicesCardsContainer>
    </StyledPrices>
  );
};

export default Prices;

const StyledPrices = styled.section``;

const ServicesCardsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
