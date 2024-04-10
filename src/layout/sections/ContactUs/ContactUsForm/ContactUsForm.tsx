import React from "react";
import styled from "styled-components";
import FormField from "./FormField/FormField";

const ContactUsForm = () => {
  return (
    <StyledContactUsForm>
      <FormField
        type="text"
        name="fullname"
        id="fullname"
        label="Your Full Name ( Required)"
      />
      <FormField
        type="email"
        name="email"
        id="email"
        label="Your Email ( Required)"
      />
      <FormField type="text" name="subject" id="subject" label="Subject" />
      <FormField
        type="text"
        name="message"
        id="message"
        label="Your Message"
        as="textarea"
      />
    </StyledContactUsForm>
  );
};

export default ContactUsForm;

const StyledContactUsForm = styled.form``;
