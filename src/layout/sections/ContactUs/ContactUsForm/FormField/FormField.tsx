import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

type FormFieldPropsType = {
  label: string;
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  as?: string;
};
const FormField = ({ id, name, type, label, as }: FormFieldPropsType) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <Field type={type} id={id} name={name} as={as} />
    </FormFieldContainer>
  );
};

export default FormField;

const FormFieldContainer = styled.div``;

const Field = styled.input``;

const Label = styled.label``;
