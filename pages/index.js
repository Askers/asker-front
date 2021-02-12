import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { END } from 'redux-saga';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import Layout from '../components/Layout';
import AskForm from '../components/AskForm';
import wrapper from '../store/configureStore';

// Style

const Home = () => (
  <>
    <Head>
      <title>Asker</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <AskForm />
    </Layout>
  </>
);

// SSR
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

export default Home;
