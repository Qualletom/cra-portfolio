import React from "react";
import styled from "styled-components";
import Header from "./layout/Header/Header";

function App() {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  min-height: 100vh;
`;
