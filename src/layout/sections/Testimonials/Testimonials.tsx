import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import testimonialsDate from "./testimonialsDate";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <StyledTestimonials>
      <SectionHeader title="recommendations">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionHeader>
      <TestimonialsCardsContainer>
        {testimonialsDate.map((testimonial) => {
          return (
            <TestimonialCard key={uuidv4()} {...testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....
            </TestimonialCard>
          );
        })}
      </TestimonialsCardsContainer>
    </StyledTestimonials>
  );
};

export default Testimonials;

const StyledTestimonials = styled.section``;

const TestimonialsCardsContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
`;
