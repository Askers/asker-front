import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_ASKS_REQUEST } from '../reducers/ask';
import Layout from '../components/Layout';
import AskForm from '../components/AskForm';

// Style
const AskSection = styled.div``;

export default function Home() {
  const dispatch = useDispatch();

  // My info Loading
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_ASKS_REQUEST,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Asker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AskForm />
        <AskSection>
          {/* {mainAsks.map((ask) => (
            <AskCard key={ask.id} ask={ask} />
          ))} */}
        </AskSection>
      </Layout>
    </>
  );
}
