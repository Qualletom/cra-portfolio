import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import project1Img from "../../../assets/images/project1.jpeg";
import project2Img from "../../../assets/images/project2.jpeg";
import project3Img from "../../../assets/images/project3.jpeg";
import ProjectCard from "./PortfolioCard/ProjectCard";

const tabs = [
  "All categories",
  "UI Design",
  "Web Templates",
  "Logo",
  "Branding",
];

const imagesSrc = [project1Img, project2Img, project3Img];

const Portfolio = () => {
  const renderProjects = () => {
    const cards = [];

    for (let i = 0; i < 9; i += 1) {
      cards.push(<ProjectCard key={uuidv4()} imageSrc={imagesSrc[i % 3]} />);
    }

    return cards;
  };
  return (
    <StyledPortfolio>
      <SectionHeader title="Portfolio">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionHeader>
      <Tabs>
        {tabs.map((tab) => {
          return <li key={uuidv4()}>{tab}</li>;
        })}
      </Tabs>
      <ProjectCardsContainer>{renderProjects()}</ProjectCardsContainer>
    </StyledPortfolio>
  );
};

export default Portfolio;

const StyledPortfolio = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tabs = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 40px;
`;

const ProjectCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
