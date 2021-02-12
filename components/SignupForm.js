import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { signupRequestAction } from '../reducers/auth';

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

const ErrorMsg = styled.div``;

const SignupForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(signupRequestAction({ email, username, password }));
    },
    [email, username, password],
  );

  return (
    <>
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
          <Label htmlFor="username">Usernamed</Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={onChangeUsername}
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
        <FormWrapper>
          <Label htmlFor="password-check">Password Check</Label>
          <Input
            type="password"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
        </FormWrapper>
        <ButtonWrapper>
          <Button type="submit" value="회원가입" />
        </ButtonWrapper>
      </Form>
      {passwordError ? (
        <ErrorMsg>일치하지 않음</ErrorMsg>
      ) : (
        <ErrorMsg>일치함</ErrorMsg>
      )}
    </>
  );
};

export default SignupForm;
