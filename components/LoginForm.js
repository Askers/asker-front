import React, { useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import {
  loginRequestAction,
  twitterLoginRequestAction,
  googleLoginRequestAction,
} from '../reducers/auth';

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
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginRequestAction({ email, password }));
    },
    [email, password],
  );

  const twitterAuth = () => {
    dispatch(twitterLoginRequestAction());
  };
  const googleAuth = () => {
    dispatch(googleLoginRequestAction());
  };

  return (
    <Form onSubmit={onSubmitForm}>
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
        <Button type="submit" value="로그인" />
      </ButtonWrapper>
      <LinkWrapper href="/signup">
        <LinkButton>회원가입</LinkButton>
      </LinkWrapper>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={twitterAuth}
          value="트위터 계정으로 로그인하기"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={googleAuth}
          value="구글 계정으로 로그인하기"
        />
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
