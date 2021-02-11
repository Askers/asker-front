import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_ANSWERS_REQUEST } from '../../reducers/ask';
import Layout from '../../components/Layout';
import AskForm from '../../components/AskForm';
import wrapper from '../../store/configureStore';

const AnswerSection = styled.div``;

const UserHome = () => {
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
      type: LOAD_ANSWERS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserHome;
