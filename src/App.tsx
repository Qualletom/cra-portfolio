import React from "react";
import styled from "styled-components";
import Header from "./layout/Header/Header";
import Services from "./layout/sections/Services/Services";
import Prices from "./layout/sections/Prices/Prices";
import Testimonials from "./layout/sections/Testimonials/Testimonials";
import Education from "./layout/sections/Education/Education";
import WorkHistory from "./layout/sections/WorkHistory/WorkHistory";
import Portfolio from "./layout/sections/Portfolio/Portfolio";
import Blog from "./layout/sections/Blog/Blog";
import ContactUs from "./layout/sections/ContactUs/ContactUs";
import TradeMarks from "./layout/sections/TradeMarks/TradeMarks";
import Footer from "./layout/Footer/Footer";
import Navigation from "./layout/Navigation/Navigation";
import Skills from "./layout/asides/Skills/Skills";

function App() {
  return (
    <StyledApp>
      <Skills />
      <div>
        <Header />
        <main>
          <Services />
          <Prices />
          <Testimonials />
          <Education />
          <WorkHistory />
          <Portfolio />
          <Blog />
          <ContactUs />
          <TradeMarks />
        </main>
        <Footer />
      </div>
      <Navigation />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 305px 1fr 108px;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  min-height: 100vh;
`;
