import React from "react";
import styled from "styled-components";

type TestimonialCardPropsType = {
  rating: number;
  title: string;
  children: string;
  reviewer: {
    imageSrc: string;
    name: string;
    job: string;
  };
};

const TestimonialCard = ({
  rating,
  reviewer,
  children,
  title,
}: TestimonialCardPropsType) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i += 1) {
      stars.push(<Star isActive={i <= rating} />);
    }

    return stars;
  };

  return (
    <StyledTestimonialCard>
      <Rating>{renderStars()}</Rating>
      <Title>{title}</Title>
      <Text>{children}</Text>
      <Reviewer>
        <img src={reviewer.imageSrc} alt={reviewer.name} />
        <h3>{reviewer.name}</h3>
        <span>{reviewer.job}</span>
      </Reviewer>
    </StyledTestimonialCard>
  );
};

export default TestimonialCard;

const StyledTestimonialCard = styled.article`
  max-width: 310px;
`;

const Rating = styled.div``;

const Star = styled.span<{ isActive: boolean }>``;

const Title = styled.h3``;
const Text = styled.p``;

const Reviewer = styled.div`
  display: flex;
`;
