import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import {
  loginRequestAction,
  twitterLoginRequestAction,
  googleLoginRequestAction,
} from '../reducers/auth';
import theme from '../assets/theme';
import LogoSvg from './Image/LogoSvg';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.xxxl};
`;

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
  width: ${theme.inputButton.width_lg};
  height: ${theme.inputButton.height};
  border-radius: ${theme.inputButton.radius};
  background-color: ${theme.colors.lightblue};
  color: ${theme.colors.gray};

  @media only screen and (min-width: 768px) {
    width: ${theme.inputButton.width_xl};
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
  width: ${theme.linkButton.width_lg};
  height: ${theme.linkButton.height};
  border-radius: ${theme.linkButton.radius};
  background-color: ${theme.colors.lightblue};
  color: ${theme.colors.gray};
  text-align: center;
  margin: ${theme.gap.small};

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  @media only screen and (min-width: 768px) {
    width: ${theme.linkButton.width_xl};
  }

  transition: all 0.5s ease-in-out;
`;

const SubTitle = styled.span`
  margin-top: ${theme.margins.xxl};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
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
        <LogoSvg width={'5rem'} />
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
      </ButtonWrapper>
      <ButtonWrapper>
        <SubTitle>유저가 아니신가요? 지금 가입하세요!</SubTitle>
        <Button type="button" value="회원가입" />
        <Button type="button" onClick={googleAuth} value="구글로 로그인하기" />
        <Button type="button" onClick={twitterAuth} value="트위터로 로그인" />
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
