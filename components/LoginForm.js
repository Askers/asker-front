import React, { useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginRequestAction } from "../reducers/user";

const Form = styled.form``;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Label = styled.span``;
const Input = styled.input``;

const ButtonWrapper = styled.div``;
const Button = styled.input``;

const LinkWrapper = styled(Link)``;
const LinkButton = styled.button``;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password]
  );

  return (
    <Form onSubmit={onSubmit}>
      <FormWrapper>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </FormWrapper>
      <ButtonWrapper>
        <Button type="submit" />
      </ButtonWrapper>
      <LinkWrapper href="/signup">
        <LinkButton>회원가입</LinkButton>
      </LinkWrapper>
    </Form>
  );
};

export default LoginForm;
