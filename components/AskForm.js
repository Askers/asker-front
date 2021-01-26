import React, { useState, useCallback } from "react";
import styled from "styled-components";

const Form = styled.form``;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Label = styled.label``;
const Input = styled.input``;

const ButtonWrapper = styled.div``;
const Button = styled.input``;

const AskForm = () => {
  const [text, onChangeText] = useState("");
  const onSubmit = useCallback(() => {}, []);
  return (
    <Form onSubmit={onSubmit}>
      <FormWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          name="text"
          value={text}
          onChange={onChangeText}
          required
        />
      </FormWrapper>
      <ButtonWrapper>
        <Button type="submit">Send</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AskForm;
