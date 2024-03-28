import React from "react";
import styled from "styled-components";
import Header from "./layout/Header/Header";
import Services from "./layout/sections/Services/Services";
import Prices from "./layout/sections/Prices/Prices";

function App() {
  return (
    <StyledApp>
      <Header />
      <main>
        <Services />
        <Prices />
      </main>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  min-height: 100vh;
`;
