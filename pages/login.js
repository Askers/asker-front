import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import wrapper from '../store/configureStore';
import { LOAD_AUTH_REQUEST } from '../reducers/auth';

const Login = () => {
  const { isLoggedIn, loginError, me } = useSelector((state) => state.auth);

  // 이미 로그인 했을 시
  useEffect(() => {
    if (me && me.id) {
      Router.replace(`/${me.id}`);
    }
  }, [me && me.id]);

  // 로그인 성공시
  useEffect(() => {
    if (isLoggedIn) {
      Router.replace(`/${me.id}`);
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
      type: LOAD_AUTH_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Login;
