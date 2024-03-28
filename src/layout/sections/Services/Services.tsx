import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <div>
      <SectionHeader title="My Services">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        necessitatibus odio pariatur quas quibusdam voluptatem.
      </SectionHeader>
      <ServicesCardsContainer>
        {servicesData.map(({ iconName, title, description }) => {
          return (
            <li key={title + iconName}>
              <ServiceCard iconName={iconName} title={title}>
                {description}
              </ServiceCard>
            </li>
          );
        })}
      </ServicesCardsContainer>
    </div>
  );
};

export default Services;

const ServicesCardsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
