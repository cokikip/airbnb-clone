import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

interface Home {
  exploreData: any;
}

const Home: NextPage<Home> = ({ exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>Home - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Fetch data from the api */}
          {exploreData?.map((item: any) => (
            <h2>{item?.location}</h2>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.npoint.io/9c4575f3beb3d9820e85"
  ).then((res) => res.json());

  console.log(exploreData);

  return {
    props: {
      exploreData,
    },
  };
}
