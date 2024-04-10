import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import logoImg1 from "../../../assets/images/logo1.png";
import logoImg2 from "../../../assets/images/logo2.png";
import logoImg3 from "../../../assets/images/logo3.png";
import logoImg4 from "../../../assets/images/logo4.png";

const logosSrc = [logoImg1, logoImg2, logoImg3, logoImg4];

const TradeMarks = () => {
  return (
    <StyledTradeMarks>
      {logosSrc.map((src) => {
        return <img key={uuidv4()} src={src} alt="company" />;
      })}
    </StyledTradeMarks>
  );
};

export default TradeMarks;

const StyledTradeMarks = styled.section`
  display: flex;
  justify-content: center;
`;
