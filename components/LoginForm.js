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
import theme from '../assets/theme';
import LogoSvg from '../public/logo.svg';

const LogoContainer = styled.div``;
const Svg = styled.img``;

const Form = styled.form`
  width: ${theme.width.mobile};
  height: ${theme.height.mobile};
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    width: ${theme.width.pc};
    height: ${theme.height.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.gap.small};
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
`;

const Input = styled.input`
  all: unset;
  width: ${theme.inputButton.width_md};
  height: ${theme.inputButton.height};
  border-radius: ${theme.inputButton.radius};
  background-color: ${theme.colors.lightblue};
  color: ${theme.colors.gray};

  @media only screen and (min-width: 768px) {
    width: ${theme.inputButton.width_lg};
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.input`
  all: unset;
  width: ${theme.linkButton.width_md};
  height: ${theme.linkButton.height};
  border-radius: ${theme.linkButton.radius};
  background-color: ${theme.colors.lightblue};
  color: ${theme.colors.gray};
  text-align: center;
  margin: ${theme.gap.small};

  @media only screen and (min-width: 768px) {
    width: ${theme.linkButton.width_lg};
  }

  transition: all 0.5s ease-in-out;
`;

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
      <LogoContainer>
        <Svg src={LogoSvg} alt="Asker Logo" />
      </LogoContainer>
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
        <Button type="button" value="회원가입" />
        <Button type="button" onClick={googleAuth} value="구글로 로그인하기" />
        <Button type="button" onClick={twitterAuth} value="트위터로 로그인" />
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
