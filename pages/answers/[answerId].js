import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_ANSWER_REQUEST } from '../../reducers/answer';
import Layout from '../../components/Layout';
import wrapper from '../../store/configureStore';

const AnswerSection = styled.div``;

const UserIndex = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Layout>
        <AnswerSection>344</AnswerSection>
      </Layout>
    </>
  );
};

/*
  SSR Dispatch
  LOAD_MY_INFO_REQUEST
  LOAD_ANSWERS_REQUEST
*/

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = cookie;
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_ANSWER_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserIndex;
