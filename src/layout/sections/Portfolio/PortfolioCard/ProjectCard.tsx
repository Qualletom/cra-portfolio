import React from "react";
import styled from "styled-components";

const ProjectCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <StyledProjectCard>
      <Image src={imageSrc} alt="project" />
    </StyledProjectCard>
  );
};

export default ProjectCard;

const StyledProjectCard = styled.div``;

const Image = styled.img`
  max-width: 310px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
