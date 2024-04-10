import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <StyledServices>
      <SectionHeader title="My Services">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        necessitatibus odio pariatur quas quibusdam voluptatem.
      </SectionHeader>
      <ServicesCardsContainer>
        {servicesData.map(({ iconName, title, description }) => {
          return (
            <li key={uuidv4()}>
              <ServiceCard iconName={iconName} title={title}>
                {description}
              </ServiceCard>
            </li>
          );
        })}
      </ServicesCardsContainer>
    </StyledServices>
  );
};

export default Services;

const StyledServices = styled.section``;

const ServicesCardsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
