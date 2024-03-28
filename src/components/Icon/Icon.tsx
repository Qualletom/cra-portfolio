import React from "react";
import styled from "styled-components";

import sprite from "../../assets/images/sprite.svg";

type IconPropsType = {
  name: string;
  width?: number;
  height?: number;
};
const Icon = ({ name, width, height }: IconPropsType) => {
  return (
    <StyledIcon width={width} height={height}>
      <svg>
        <use xlinkHref={`${sprite}#${name}`} />
      </svg>
    </StyledIcon>
  );
};

export default Icon;

type StuledIconPropsType = {
  width?: number;
  height?: number;
};

const StyledIcon = styled.div<StuledIconPropsType>`
  width: ${(props) => `${props.width || 18}px`};
  height: ${(props) => `${props.height || 18}px`};

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.nightRider};
  }
`;
