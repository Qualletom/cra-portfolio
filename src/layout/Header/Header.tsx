import React from "react";
import styled from "styled-components";
import Icon from "../../components/Icon/Icon";
import developerPhoto from "../../assets/images/developerPhoto.jpg";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>I’m Rayan Adlrdard Front-end Developer </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
          dolor, enim! Alias illum odit velit.
        </p>
        <button type="button">
          Hire me
          <Icon name="arrow-right" />
        </button>
      </div>
      <img src={developerPhoto} alt="developer" />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
