import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Head from 'next/head';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_ASKS_REQUEST } from '../../reducers/ask';
import Layout from '../../components/Layout';
import AskForm from '../../components/AskForm';
import wrapper from '../../store/configureStore';

const UserHome = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Asker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AskForm targetUserId={id} />
        {/* <AskSection> */}
        {/* {mainAsks.map((ask) => (
              <AskCard key={ask.id} ask={ask} />
            ))} */}
        {/* </AskSection> */}
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
      type: LOAD_ASKS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserHome;
