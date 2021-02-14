import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import Layout from '../../components/Layout';
import AskForm from '../../components/AskForm';
import wrapper from '../../store/configureStore';

const AnswerSection = styled.div``;

const UserIndex = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Layout>
        <AskForm targetUserId={userId} />
        <AnswerSection>{/* 답변 */}</AnswerSection>
      </Layout>
    </>
  );
};

/*
  SSR Dispatch
  LOAD_AUTH_REQUEST
  LOAD_ASKS_REQUEST
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

export default UserIndex;
