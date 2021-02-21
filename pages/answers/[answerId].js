import React, { useEffect } from 'react';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import styled from 'styled-components';
import wrapper from '../../store/configureStore';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';

const AnswerDetailContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerDetail = () => {
  return <AnswerDetailContainer></AnswerDetailContainer>;
};

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

export default AnswerDetail;
