import React from "react";
import styled from "styled-components";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import ContactInfo from "./ContactInfo/ContactInfo";

const ContactUs = () => {
  return (
    <StyledContactUs>
      <div>
        <SectionHeader title="Leave us your info" />
        <ContactUsForm />
      </div>
      <div>
        <SectionHeader title="Contact information" />
        <ContactInfo />
      </div>
    </StyledContactUs>
  );
};

export default ContactUs;

const StyledContactUs = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
