import React from "react";
import styled from "styled-components";

type BlogCardPropsType = {
  imageSrc: string;
  title: string;
  description: string;
};
const BlogCard = ({ imageSrc, description, title }: BlogCardPropsType) => {
  return (
    <StyledBlogCard>
      <PreviewImage src={imageSrc} alt="blog" />
      <Title>{title}</Title>
      <Text>{description}</Text>
    </StyledBlogCard>
  );
};

export default BlogCard;

const StyledBlogCard = styled.article`
  max-width: 310px;
  width: 100%;
  background-color: #ffffff;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
`;

const Text = styled.p``;

const PreviewImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
