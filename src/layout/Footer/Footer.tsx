import React from "react";
import styled from "styled-components";
import Icon from "../../components/Icon/Icon";

const Footer = () => {
  return (
    <StyledFooter>
      <Icon name="copyright" />
      <span>2021 All Rights Reserved.Ojjomedia</span>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`;
