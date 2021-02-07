import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const { isLoggedIn, loginError, user } = useSelector((state) => state.user);

  // 이미 로그인 했을 시
  useEffect(() => {
    if (user && user.id) {
      Router.replace('/');
    }
  }, [user && user.id]);

  // 회원가입 성공시
  useEffect(() => {
    if (isLoggedIn) {
      Router.replace('/');
    }
  }, [isLoggedIn]);

  // 회원가입 에러
  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  }, [loginError]);

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default Login;
