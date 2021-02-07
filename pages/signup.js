import Router from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  const { isSignedUp, signupError, user } = useSelector((state) => state.user);

  // 이미 로그인 했을 시
  useEffect(() => {
    if (user && user.id) {
      Router.replace('/');
    }
  }, [user && user.id]);

  // 회원가입 성공시
  useEffect(() => {
    if (isSignedUp) {
      Router.replace('/login');
    }
  }, [isSignedUp]);

  // 회원가입 에러
  useEffect(() => {
    if (signupError) {
      alert(signupError);
    }
  }, [signupError]);

  return (
    <Layout>
      <SignupForm />
    </Layout>
  );
};

export default Signup;
