import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Header */}
        <Header />
        {/* Banner */}
        {/* Body */}
        {/* Footer */}
      </main>
    </div>
  );
};

export default Home;
