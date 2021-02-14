import React from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import Button from '../components/Button';
import { LOAD_AUTH_REQUEST } from '../reducers/auth';
import wrapper from '../store/configureStore';

// Style

const Home = () => (
  <>
    <Button name="시작하기" dest="login" />
  </>
);

/*
  SSR Dispatch
  LOAD_AUTH_REQUEST
*/
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_AUTH_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Home;
