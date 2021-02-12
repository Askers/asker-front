import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Login = () => {
  const { isLoggedIn, loginError, user } = useSelector((state) => state.user);
  // 이미 로그인 했을 시
  useEffect(() => {
    if (user && user.id) {
      Router.replace(`/${user.id}`);
    }
  }, [user && user.id]);

  // 로그인 성공시
  useEffect(() => {
    if (isLoggedIn) {
      Router.replace(`/${user.id}`);
    }
  }, [isLoggedIn]);

  // 로그인 에러
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

/*
  SSR Dispatch
  LOAD_MY_INFO_REQUEST
*/
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = cookie;
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Login;
