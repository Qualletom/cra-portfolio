import React from "react";
import Icon from "../../components/Icon/Icon";
import developerPhoto from "../../assets/images/developerPhoto.jpg";
import { SC } from "./Header_Styles";

const Header = () => {
  return (
    <SC.Header>
      <div>
        <h2>I’m Rayan Adlrdard</h2>
        <h1>Front-end Developer </h1>
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
    </SC.Header>
  );
};

export default Header;
