import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import blogData from "./blogData";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <StyledBlog>
      <SectionHeader title="Blog">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </SectionHeader>
      <BlogCardsContainer>
        {blogData.map((blog) => {
          return <BlogCard key={uuidv4()} {...blog} />;
        })}
      </BlogCardsContainer>
    </StyledBlog>
  );
};

export default Blog;

const StyledBlog = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogCardsContainer = styled.div`
  display: flex;
  gap: 20px;
`;
