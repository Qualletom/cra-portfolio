import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import contactInfoData from "./contactInfoData";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      {contactInfoData.map((info) => {
        return <ContactInfoCard key={uuidv4()} {...info} />;
      })}
    </StyledContactInfo>
  );
};

export default ContactInfo;

const StyledContactInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
