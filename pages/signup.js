import Router from 'next/router';
import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import SignupForm from '../components/SignupForm';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_ASKS_REQUEST } from '../reducers/ask';
import wrapper from '../store/configureStore';

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

// SSR
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = cookie;
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_ASKS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Signup;
