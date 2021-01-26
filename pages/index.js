import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AskCard from "../components/AskCard";
import AskForm from "../components/AskForm";

import { useSelector } from "react-redux";

export default function Home() {
  const { asks } = useSelector((state) => state);
  return (
    <>
      <Head>
        <title>Asker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AskForm />
        {asks.map((ask) => {
          <AskCard key={ask.id} ask={ask} />;
        })}
      </Layout>
    </>
  );
}
