import React from "react";
import { SC } from "./Navigation_Styles";
import Icon from "../../components/Icon/Icon";

const links = [
  {
    iconName: "home",
    link: "#",
    text: "Home",
  },
  {
    iconName: "services",
    link: "#",
    text: "Services",
  },
  {
    iconName: "price-plan",
    link: "#",
    text: "Price plans",
  },
  {
    iconName: "reviews",
    link: "#",
    text: "Reviews",
  },
  {
    iconName: "education",
    link: "#",
    text: "Education",
  },
  {
    iconName: "portfolio",
    link: "#",
    text: "Portfolio",
  },
  {
    iconName: "blog",
    link: "#",
    text: "Blog",
  },
  {
    iconName: "contact-us",
    link: "#",
    text: "Contact us",
  },
];
const Navigation: React.FC = () => {
  return (
    <SC.Navigation>
      <Icon name="contrast-moon" />
      <ul role="menu">
        {links.map((link) => (
          <li key={link.iconName}>
            <a href={link.link} title={link.text}>
              <span>{link.text}</span>
              <Icon name={link.iconName} />
            </a>
          </li>
        ))}
      </ul>
    </SC.Navigation>
  );
};

export default Navigation;
