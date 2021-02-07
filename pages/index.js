import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Layout from '../components/Layout';
// import AskCard from "../components/AskCard";
import AskForm from '../components/AskForm';

// import { useSelector } from "react-redux";

// Style
const AskSection = styled.div``;

export default function Home() {
  // const { mainAsks } = useSelector((state) => state.ask);
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
